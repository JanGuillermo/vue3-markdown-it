# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.8] - 2021-04-02
### Changed
- Update dependencies

## [1.0.7] - 2020-12-11
### Changed
- Update dependencies

## [1.0.6] - 2020-12-10
### Changed
- Update dependencies

## [1.0.5] - 2020-09-19
### Changed
- Update dependencies

## [1.0.4] - 2020-09-17
### Added
- Added support for external plugins using a new property `plugins`

### Removed
- [markdown-it-latex](https://github.com/tylingsoft/markdown-it-latex) dependency

## [1.0.3] - 2020-09-16
### Added
- Added `linkify` property

### Changed
- Reduced production library size

### Removed
- [markdown-it-strikethrough-alt](https://github.com/jay-hodgson/markdown-it-strikethrough-alt) dependency

## [1.0.2] - 2020-09-15
### Added
- Added information on README for including LaTeX + highlight.js styles

### Changed
- Split test cases into individual plugin test files
- Utilize Vue's Compositions API for the component

### Fixed
- [Syntax highlighting indentation issues #14](https://github.com/JanGuillermo/vue3-markdown-it/issues/14)

### Removed
- Omitted the production library folder
- Omitted the includes for LaTeX + highlight.js styles
- [dedent](https://github.com/MartinKolarik/dedent-js) dependency
- [highlight.js](https://github.com/highlightjs/highlight.js) dependency

## [1.0.1] - 2020-09-14
### Added
- Released vue3-markdown-it with support for 14 plugins:
  - [markdown-it](https://github.com/markdown-it/markdown-it) - __The one__ that started it all
  - [markdown-it-abbr](https://github.com/markdown-it/markdown-it-abbr) - Add abbreviations
  - [markdown-it-anchor](https://github.com/valeriangalliat/markdown-it-anchor) - Add anchors
  - [markdown-it-deflist](https://github.com/markdown-it/markdown-it-deflist) - Add definition lists
  - [markdown-it-emoji](https://github.com/markdown-it/markdown-it-emoji) - Add emojis
  - [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote) - Add footnotes
  - [markdown-it-highlightjs](https://github.com/valeriangalliat/markdown-it-highlightjs) - Add highlighting for code blocks
  - [markdown-it-ins](https://github.com/markdown-it/markdown-it-ins) - Add `<ins>` tags
  - [markdown-it-latex](https://github.com/tylingsoft/markdown-it-latex) - Add LaTeX formatting
  - [markdown-it-mark](https://github.com/markdown-it/markdown-it-mark) - Add marking/highlighting
  - [markdown-it-strikethrough-alt](https://github.com/jay-hodgson/markdown-it-strikethrough-alt) - Add strikethrough
  - [markdown-it-sub](https://github.com/markdown-it/markdown-it-sub) - Add subscript
  - [markdown-it-sup](https://github.com/markdown-it/markdown-it-sup) - Add superscript
  - [markdown-it-task-lists](https://github.com/revin/markdown-it-task-lists) - Add task lists
  - [markdown-it-toc-done-right](https://github.com/nagaozen/markdown-it-toc-done-right) - Add table of contents

[1.0.8]: https://github.com/JanGuillermo/vue3-markdown-it/compare/v1.0.7...v1.0.8
[1.0.7]: https://github.com/JanGuillermo/vue3-markdown-it/compare/v1.0.6...v1.0.7
[1.0.6]: https://github.com/JanGuillermo/vue3-markdown-it/compare/v1.0.5...v1.0.6
[1.0.5]: https://github.com/JanGuillermo/vue3-markdown-it/compare/v1.0.4...v1.0.5
[1.0.4]: https://github.com/JanGuillermo/vue3-markdown-it/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/JanGuillermo/vue3-markdown-it/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/JanGuillermo/vue3-markdown-it/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/JanGuillermo/vue3-markdown-it/releases/tag/v1.0.1
