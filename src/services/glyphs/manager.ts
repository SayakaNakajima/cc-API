import { getRepository, Repository, DeleteResult } from "typeorm";
import Glyph from "../../entities/glyph";
import { IManager } from "../common/manager";

interface GlyphInput extends Glyph {
  glyph: string
}

class GlyphManager implements IManager {
  protected glyphRepository: Repository<Glyph>;

  constructor() {
    this.glyphRepository = getRepository(Glyph);
  }

  public async getGlyph(id: string): Promise<Glyph> {
    const glyphFound = await this.glyphRepository.find({
      where: {
        id: id
      }
    });
    return Promise.resolve(glyphFound[0]);
  }

  public async createGlyph(glyphDetails: Partial<GlyphInput>): Promise<GlyphInput> {

    const newGlyph = new Glyph();
    newGlyph.glyph = glyphDetails.glyph;
    if (glyphDetails.radical) newGlyph.radical = glyphDetails.radical;
    if (glyphDetails.strokes) newGlyph.strokes = glyphDetails.strokes;
    if (glyphDetails.test_grade) newGlyph.test_grade = glyphDetails.test_grade;

    return this.glyphRepository.save(newGlyph);
  }

  public async updateGlyph(id: number, updates: Partial<Glyph>): Promise<Glyph> {
    await this.glyphRepository.update(id, updates);
    return Promise.resolve(await this.getGlyph(String(id)));
  }

  public async removeGlyph(id: number): Promise<DeleteResult | void> {
    return Promise.resolve(await this.glyphRepository.delete(id));
  }

}

export default GlyphManager;
