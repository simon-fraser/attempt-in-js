# Node Attempt

Simplified promise error management and handling.

## Install

```bash
npm i attempt-in-js
```

## Usage

```typescript
import { attempt } from 'attempt-in-js'

const [error, result] = await attempt(async () => await fetchData());

if (error) {
  console.error("Operation failed:", error);
} else {
  console.log("Operation succeeded:", result);
}
```

## Local

```bash
git clone https://github.com/simon-fraser/attempt-in-js.git
cd Attempt
npm install
```

You can build and test locally via

```bash
# Build
npm run build
```

```bash
# Test
npm run test
```

## License

This project is licensed under the [MIT License](LICENSE).
