# homepage-module-pwa-studio
Homepage Module for Magento PWA Studio

## 1. Clone pwa-studio
```
git clone https://github.com/magento-research/pwa-studio/
cd pwa-studio
git checkout release/5.0
cp packages/venia-concept/.env.dist packages/venia-concept/.env
```

## 2. Modify package.json

workspaces:
```

  "workspaces": [
...
    "packages/upward-spec",
    "packages/simi-home"
  ],

```

scripts:

```
  "scripts": {
	...
    "venia": "yarn workspace @magento/venia-concept",
    "simi-home": "node ./packages/pwa-buildpack/bin/buildpack load-env ./packages/simi-home && yarn workspace @simicart/simi-home",
    "watch:simihome": "yarn simi-home run watch",
    "stage:simihome": "yarn simi-home run start"
  },
```

## 3. Clone simi-home
```
cd  packages
git clone https://github.com/Simicart/homepage-module-pwa-studio
cd ..
yarn install
yarn run build
```

## 4. Run watch/stage
To run watch
```
yarn run watch:simihome
```
To run production
```
NODE_ENV=production PORT=8080 npm run stage:simihome
```
