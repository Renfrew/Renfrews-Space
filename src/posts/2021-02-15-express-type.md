# Install Node.js into AWS EC2

## Environment

- Date: 2021 February

- yarn: 2.4.0

## Add Typescript

```bash
yarn add -D typescript ts-node
```

> tsconfig.json
>
>> `compilerOptions`: mandaroty field
>>
>> `target`: allowss us to specifiy the target JavaScript version that compiler will output




```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "rootDir": "./",
    "outDir": "./build",
    "esModuleInterop": true,
    "strict": true
  }
}
```
