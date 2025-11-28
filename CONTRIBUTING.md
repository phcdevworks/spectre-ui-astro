# Contributing to @phcdevworks/spectre-ui-astro

Thank you for your interest in contributing to Spectre UI Astro!

## Development Setup

1. Clone the repository:

```bash
git clone https://github.com/phcdevworks/spectre-ui-astro.git
cd spectre-ui-astro
```

2. Install dependencies:

```bash
npm install
```

3. Build the package:

```bash
npm run build
```

4. Run type checking:

```bash
npm run typecheck
```

## Project Structure

- `src/components/` - Astro component implementations
- `src/types/` - TypeScript type definitions
- `src/index.ts` - Main entry point with exports
- `dist/` - Built output (generated)

## Guidelines

### Component Development

1. **No style reimplementation**: Always use `@phcdevworks/spectre-ui` for styling
2. **Use recipes**: Import and use functions like `getButtonClasses`, `getCardClasses`, etc.
3. **Type safety**: All props must be fully typed
4. **Accessibility**: Include proper ARIA attributes
5. **SSR compatibility**: Ensure components work server-side

### Code Style

- Use TypeScript for type definitions
- Follow existing code formatting
- Document props with JSDoc comments
- Keep components minimal and focused

### Testing

Before submitting a PR:

1. Ensure `npm run build` completes without errors
2. Run `npm run typecheck` to verify types
3. Test in an actual Astro project

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes
3. Update documentation if needed
4. Submit a PR with a clear description

## Questions?

Open an issue on GitHub or reach out to the maintainers.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
