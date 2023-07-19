# `@miaou/types` Typing Brand utility


Usable type only to avoid copy/pasting everytime we start a  new project. This lib use `ts-brand`, more information about branding in the repo.

```typescript
import { Minute } from './date'

const addMinutes = (minutes: Minute) =>  minutes // type = (Minute) => Minute
const minutes = 10 as Minute // Branding

// Syntax Error: 10 is not compatible with Minute type  
addMinutes(10)

// Compile
addMinutes(minutes) 
addMinutes(10 as Minute)

// Compile but total is a type of number and not Minute
const total = minutes + 30
```

## Install

```bash
yarn add --exact --dev @miaou/types
```

## Documentation
### Typescript
#### `Parameter`
Typescript provide `Parameters` (more description on typescript documentation), `Parameter` is just an alias for `Parameters[0]`

```typescript
type MyFunction = (payload: { id: Id, total: number}) => void

type MyFunctionPayload = Parameter<MyFunction> // MyFunctionPayload = { id: Id, total: number}
```

### Audit
#### `Audit` 
Add to each functional structure of your domain. You should separate to the Database structure and use only on your domain.

```typescript
type User = {
  id: UserId,
  firstName: string,
  lastName: string,
  email: Email
} & Audit
```

### Crypto
#### `WalletId`
#### `Token`
#### `cryptoCurrencies` 
Array containing around 400 most famous crypto.

**BTC, BNB, ADL, ADX, ADZ, AE...**
#### `CryptoCurrency`

### Date
#### `Second` 
#### `Minute` 
#### `Day` 
#### `Hour` 
#### `Month` 
#### `Year` 

### i18n
#### `languagesIsoShort` 
Array containing all ISO Languages 2 letters.

**ar, es, fr...**

#### `LanguageIsoShort`
#### `languagesIsoLong`
Array containing all ISO Languages 4 letters.

**fr-fr, fr-ca, en-gb...**
#### `LanguageIsoLong`
#### `LanguageIso` 
Union between `LanguageIsoShort` and `LanguageIsoLong` 
#### `I18nString`
Translated string avoid using primitive string when you have translation inside your domain.

```typescript

type Product = {
  name: I18nString
  description: I18nString
}

// Usage

const myProduct = {
  name: {
    fr: 'Mon produit',
    en: 'My product'
  },
  description: {
    fr: 'Ma description',
    en: 'My description'
  },
}

const currentLanguage: LanguageIsoShort = 'fr'
console.log(myProduct.name[currentLanguage]) // > Mon produit
console.log(myProduct.name[currentLanguage]) // > Ma description
```


### Money
#### `Amount`
#### `AmountUsd` `AmountEur`
When working with money, to avoid convert everytime, we use a reference currency (EUR or USD) to work with.

Pro:
- It's simplify a lot the development
- Avoid to convert with current rate at every time we want to compute amounts
- The converting is only made by the front or at the border of the domain

Con:
- This approach are not working for all situation
- We don't have enough vision to validate this solution yet

#### `fiatCurrencies`
Array containing all Fiat currencies trigram

**EUR, USD, AED...**

#### `FiatCurrency` 
#### `Currency`
Type defining all Fiat and Crypto currencies trigram

### User
#### `UserId`
Type defining user id, but `system` or `guest` too.
- `system` every time your application make a write action on your domain collection (cron task, automated task, etc.)
- `guest` if no authenticated user or anonymous
#### `Email`
#### `PhoneNumber`

### Web
#### `Url`
#### `SvgPath`

---
## Development

### How to use

```
yarn install
```

### Test

You can use `yarn link` to debug the module

### Release commit semantic

The release is automated by release-semantic plugin. When merge to master:
- Generate tag version
- Automate library versioning based on commit history
- Generate changelog based on commit history

```text
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: animations|bazel|benchpress|common|compiler|compiler-cli|core|ect.
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

###### Usage 

```text
fix: testing patch releases
```

```text
feat: testing minor releases
```

```text
feat: testing major releases

BREAKING CHANGE: This is a breaking change.
```
