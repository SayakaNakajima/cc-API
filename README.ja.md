# cc-API
このリポジトリはCode Chrysalisの生徒であるときに作成しました
This was created during my time as a student at Code Chrysalis

漢字で遊ぶために作ったAPIです
RESTで作っています

GET /glyphs/:id
ID(INT型）で該当するIDの情報を取得します

POST /glyphs
JSONデータをrequestsとして送信し、新しい漢字データを作成します

PATCH /glyphs/:id
JSONデータをrequestsとして送信し、該当するIDの漢字データを修正します

DELETE /gryphs/:id
ID(INT型）で該当するIDの情報をDB上から削除します

ーーーーー未実装

GET /glyphs
現在DB上にある漢字のデータを取得します

GET /glyphs?limit=3
現在DB上にある漢字のデータのうちlimit分だけ取得します

GET /test/:grade
grade(STRING型)で、漢字検定の級数の一覧を取得します
準１級、準２級は 1a, 2a で（未実装）

POST /idiom2
二字熟語を作り出します

本当はgraphQLでやりたいし確実にgraphQL向けなので実装し直したい。。。。
2020.11.23