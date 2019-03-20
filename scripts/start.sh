#!/bin/sh

trap "trap - TERM && kill -- -$$" INT TERM EXIT

echo "running ganache-cli ..."

{ 
	ganache-cli -e 50000000
} 1>/dev/null &

sleep 1

if [ ! -d "packages/ap-contracts/build" ]
then
	echo "compiling contracts ..."
	(
		cd packages/ap-contracts
		truffle compile | 1>/dev/null
	)
fi

echo "migrating contracts ..."

(
	cd packages/ap-contracts
	truffle migrate --network development | 1>/dev/null
)

echo "clearing databases ..."

(
	cd packages/simple-relayer
	echo "" > Channel-Database.json
	echo "" > Orderbook-Database.json
)

echo "running simple-relayer ..."

if ! [ -x "$(command -v yarn)" ]; then
	{
		cd packages/simple-relayer
		npm start
	} 1>/dev/null &
else
	{
		cd packages/simple-relayer
		yarn start
	} 1>/dev/null &
fi

echo "ready ..."

while true; do sleep 1; done
