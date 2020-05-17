# SVG Badges generator

An SVG badge generator developed as part of a self-training about Node.js and testing/mocking with Jasmine. It returns info badges about about Npm and Nuget packages.

## Available API

### Nuget

*/nuget/version/{package}*

Returns an SVG with the Nuget package's latest version. Example:

`/nuget/version/unity`

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="88" height="20">
	<linearGradient id="b" x2="0" y2="100%">
		<stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
		<stop offset="1" stop-opacity=".1"/>
	</linearGradient>
	<clipPath id="a">
		<rect width="88" height="20" rx="3" fill="#fff"/>
	</clipPath>
	<g clip-path="url(#a)">
		<path fill="#555" d="M0 0h42v20H0z"/>
		<path fill="#007ec6" d="M42 0h88v20H42z"/>
		<path fill="url(#b)" d="M0 0h88v20H0z"/>
	</g>
	<g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
		<text x="21" y="15" fill="#010101" fill-opacity=".3">nuget</text>
		<text x="21" y="14">nuget</text>
		<text x="65" y="15" fill="#010101" fill-opacity=".3">5.11.6</text>
		<text x="65" y="14">5.11.6</text>
	</g>
</svg>

*/nuget/downloads/{package}*

Returns an SVG with the Nuget package's total downloads. Example:

`/nuget/downloads/unity`

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="135" height="20">
	<linearGradient id="b" x2="0" y2="100%">
		<stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
		<stop offset="1" stop-opacity=".1"/>
	</linearGradient>
	<clipPath id="a">
		<rect width="135" height="20" rx="3" fill="#fff"/>
	</clipPath>
	<g clip-path="url(#a)">
		<path fill="#555" d="M0 0h69v20H0z"/>
		<path fill="#4c1" d="M69 0h135v20H69z"/>
		<path fill="url(#b)" d="M0 0h135v20H0z"/>
	</g>
	<g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
		<text x="34.5" y="15" fill="#010101" fill-opacity=".3">downloads</text>
		<text x="34.5" y="14">downloads</text>
		<text x="102" y="15" fill="#010101" fill-opacity=".3">28075393</text>
		<text x="102" y="14">28075393</text>
	</g>
</svg>

### Npm

*/npm/version/{package}*

Returns an SVG with the Npm package's latest version. Example:

`/npm/version/react`

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="88" height="20">
	<linearGradient id="b" x2="0" y2="100%">
		<stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
		<stop offset="1" stop-opacity=".1"/>
	</linearGradient>
	<clipPath id="a">
		<rect width="88" height="20" rx="3" fill="#fff"/>
	</clipPath>
	<g clip-path="url(#a)">
		<path fill="#555" d="M0 0h35v20H0z"/>
		<path fill="#007ec6" d="M35 0h88v20H35z"/>
		<path fill="url(#b)" d="M0 0h88v20H0z"/>
	</g>
	<g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
		<text x="17.5" y="15" fill="#010101" fill-opacity=".3">npm</text>
		<text x="17.5" y="14">npm</text>
		<text x="61.5" y="15" fill="#010101" fill-opacity=".3">16.13.1</text>
		<text x="61.5" y="14">16.13.1</text>
	</g>
</svg>

*/npm/downloads/{package}*

Returns an SVG with the Npm package's total downloads. Example:

`/npm/downloads/react`

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="142" height="20">
	<linearGradient id="b" x2="0" y2="100%">
		<stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
		<stop offset="1" stop-opacity=".1"/>
	</linearGradient>
	<clipPath id="a">
		<rect width="142" height="20" rx="3" fill="#fff"/>
	</clipPath>
	<g clip-path="url(#a)">
		<path fill="#555" d="M0 0h69v20H0z"/>
		<path fill="#4c1" d="M69 0h142v20H69z"/>
		<path fill="url(#b)" d="M0 0h142v20H0z"/>
	</g>
	<g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
		<text x="34.5" y="15" fill="#010101" fill-opacity=".3">downloads</text>
		<text x="34.5" y="14">downloads</text>
		<text x="105.5" y="15" fill="#010101" fill-opacity=".3">444744857</text>
		<text x="105.5" y="14">444744857</text>
	</g>
</svg>

### Static

*/static/{left}-{right}-{color}*

Returns a custom badge with the provided messages and color. Examples

`/static/Hi-there-YellowGreen`

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="62" height="20">
	<linearGradient id="b" x2="0" y2="100%">
		<stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
		<stop offset="1" stop-opacity=".1"/>
	</linearGradient>
	<clipPath id="a">
		<rect width="62" height="20" rx="3" fill="#fff"/>
	</clipPath>
	<g clip-path="url(#a)">
		<path fill="#555" d="M0 0h22v20H0z"/>
		<path fill="#a4a61d" d="M22 0h62v20H22z"/>
		<path fill="url(#b)" d="M0 0h62v20H0z"/>
	</g>
	<g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
		<text x="11" y="15" fill="#010101" fill-opacity=".3">Hi</text>
		<text x="11" y="14">Hi</text>
		<text x="42" y="15" fill="#010101" fill-opacity=".3">there</text>
		<text x="42" y="14">there</text>
	</g>
</svg>

List of Supported colors:

- Blue
- Green
- BrightGreen
- YellowGreen
- Yellow
- Orange
- Red
- LightGrey

## License

Apache License V2
