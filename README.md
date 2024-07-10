
# Bower Package Search

## Overview

This project is a working clone of https://bower.io/search/ with additional features.
**For testing please visit [Bower Search](https://e-maad1.github.io).**

## Testing Strategies 

- **E2E Tests**: Added e2e test for major functionalities.
- **Visual Regression Test**: I personally prefer storybook for visual regression test but the setup was time consuming, so I utilize snapshot testing.
- **Integration Tests**: Added integration test on page level.

## Patterns Introduced

- **Page Object Model (POM)**: This pattern is used to create an object repository for web UI elements. It enhances test maintenance and reduces code duplication.
- **Domain Hooks**: Custom hooks are utilized to manage and reuse domain-specific logic across components.
- **Value Object Factory**: This pattern is used to create immutable value objects, ensuring the integrity and validation of data.

## Caching

- **Session Storage**: The application uses session storage to cache data, improving performance by reducing redundant network requests.

## Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/e-maad/bower-pkg-search.git
   cd bower-pkg-search
   ```

2. **Install dependencies**
   ```bash
   yarn
   ```

3. **Run the application**
   ```bash
   yarn start
   ```

## Testing

### Running Tests

- **Component testing**
  ```bash
  yarn test
  ```

- **End-to-End Tests**
  ```bash
  yarn test:e2e
  ```
  
## Future Enhancements  

- **Localization/Internationalization**: Multilingual support can be added.
- **Accessibility**: Improvement in color contracts and UX.
- **Customizable Columns**: User should be able to select columns for the table.
- **E2E Tests**: Added e2e test for major functionalities.

## Trade-offs
- **Use of component library**: To keep the task simple and more challenging I prefered no to use any component library.
- **Sorting**: I only implemented sorting for stars because of API limitation.
- **Styles**: I copied few styles from bower.io repository to make it look similar.
- **Pagination**: The API does not return totalCount for pagination, I didn't add any logic to handle this case as I believed that it should be handled at API level.
- **UseMemo, UseCallback and Memo**: I intentionally not added these performance improvement hooks just to keep things simple and I believe that the code readability is more important than micro performance improvements.
