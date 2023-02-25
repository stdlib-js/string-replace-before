<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# replaceBefore

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Replace the substring before the first occurrence of a specified search string.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
replaceBefore = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/string-replace-before@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var replaceBefore = require( 'path/to/vendor/umd/string-replace-before/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/string-replace-before@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.replaceBefore;
})();
</script>
```

#### replaceBefore( str, search, replacement )

Replaces the substring before the first occurrence of a specified search string.

```javascript
var out = replaceBefore( 'beep boop', ' ', 'loop' );
// returns 'loop boop'

out = replaceBefore( 'beep boop', 'o', 'bar' );
// returns 'baroop'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If a search string is not present in a provided string, the function returns the provided string unchanged.
-   If a search string is an empty string, the function returns the provided string unchanged.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/string-replace-before@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var out = replaceBefore( 'beep boop', 'p', 'see' );
// returns 'seep boop'

out = replaceBefore( 'Hello World!', 'xyz', 'foo' );
// returns 'Hello World!'

out = replaceBefore( 'Hello World!', '', 'foo' );
// returns 'Hello World!'

out = replaceBefore( '', 'xyz', 'foo');
// returns ''

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-replace-before.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-replace-before

[test-image]: https://github.com/stdlib-js/string-replace-before/actions/workflows/test.yml/badge.svg?branch=vnull
[test-url]: https://github.com/stdlib-js/string-replace-before/actions/workflows/test.yml?query=branch:vnull

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-replace-before/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-replace-before?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-replace-before.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-replace-before/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/string-replace-before#cli
[cli-url]: https://github.com/stdlib-js/string-replace-before/tree/cli
[@stdlib/string-replace-before]: https://github.com/stdlib-js/string-replace-before/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-replace-before/tree/deno
[umd-url]: https://github.com/stdlib-js/string-replace-before/tree/umd
[esm-url]: https://github.com/stdlib-js/string-replace-before/tree/esm
[branches-url]: https://github.com/stdlib-js/string-replace-before/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-replace-before/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

</section>

<!-- /.links -->
