# cc-API
このリポジトリはCode Chrysalisの生徒であるときに作成しました
This was created during my time as a student at Code Chrysalis

Playing with Kanji API

GET /glyphs/:id
ID(INT型）で該当するIDの情報を取得します

POST /glyphs
JSONデータをrequestsとして送信し、新しい漢字データを作成します

PATCH /glyphs/:id
JSONデータをrequestsとして送信し、該当するIDの漢字データを修正します

DELETE /gryphs/:id
ID(INT型）で該当するIDの情報をDB上から削除します