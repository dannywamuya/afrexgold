function InfogramEmbed() {
	const embedCode = `
    <div
      class="infogram-embed"
      data-id="023322ca-b3d6-4e0a-b240-c5353c9f41bb"
      data-type="interactive"
      data-title="Copy: Restoration"
    ></div>
    <script>
      !(function (e, n, i, s) {
        var d = 'InfogramEmbeds';
        var o = e.getElementsByTagName(n)[0];
        if (window[d] && window[d].initialized) window[d].process && window[d].process();
        else if (!e.getElementById(i)) {
          var r = e.createElement(n);
          (r.async = 1),
            (r.id = i),
            (r.src = s),
            o.parentNode.insertBefore(r, o);
        }
      })(
        document,
        'script',
        'infogram-async',
        'https://infogram.com/js/dist/embed-loader-min.js'
      );
    </script>
  `;

	return (
		<div
			className='w-full px-8 lg:px-16'
			dangerouslySetInnerHTML={{ __html: embedCode }}
		/>
	);
}

export default InfogramEmbed;
