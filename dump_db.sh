rm -r -f sql
mkdir -p sql

# TODO: どのようなディレクトリ構造でもちゃんと取得ができるようにダンプ用のコンテナを起動する
# スキーマのみのダンプを作成
docker exec -t systemapi-db-1 pg_dump --schema-only -U postgres sample > ./sql/00_schema_`date +%d-%m-%Y"_"%H_%M_%S`.sql

# データのみのダンプを作成
docker exec -t systemapi-db-1 pg_dump --data-only -U postgres sample > ./sql/01_data_`date +%d-%m-%Y"_"%H_%M_%S`.sql