import { Router, Request, Response, NextFunction } from "express";
import _ from "lodash";
import GryphManager from "./manager";
import BaseController from "../common/controller";


class GlyphController extends BaseController {
public path: string = "/glyphs";
  public router: Router;

  protected manager: GryphManager;

  constructor() {
    super();
    this.router = this.createRouter();
    this.manager = new GryphManager();
  }

  /**
   * Using a factory method here
   */
  protected createRouter(): Router {
    const router = Router();

    // router.get("/", this.get);
    router.get("/:id", this.get);
    router.post("/", this.post);
    router.patch("/:id", this.patch);
    router.delete("/:id", this.delete);

    return router;
  }

  /**
   * HTTP GET request handler
   */
  protected get = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const glyph = await this.manager.getGlyph(id);
      if (!glyph) {
        res.status(403).send({ error: "user not found" });
        return;
      }

      res.json(_.pick(glyph, ["id", "glyph", "radical", "strokes", "test_grade"]));
    } catch (err) {
      next(err);
    }
  };

  /**
   * HTTP POST request handler
   */
  protected post = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      console.log(req.body);
      const glyphDetails = req.body;
      const glyph = await this.manager.createGlyph(glyphDetails);

      res.status(201).json(_.pick(glyph, ["id", "glyph", "radical", "strokes", "test_grade"]));
    } catch (err) {
      next(err);
    }
  };

  /**
   * HTTP PATCH request handler
   */
  protected patch = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const newGlyphDetails = req.body;
      const glyph = await this.manager.updateGlyph(Number(id), newGlyphDetails);

      res.json(_.pick(glyph, ["id", "glyph", "radical", "strokes", "test_grade"]));
    } catch (err) {
      next(err);
    }
  };

  /**
   * HTTP DELETE request handler
   */
  protected delete = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;

    try {
      await this.manager.removeGlyph(Number(id));
      res.status(200).end();
    } catch (err) {
      next(err);
    }
  };
}

export default GlyphController;
