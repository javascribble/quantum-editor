export const exportHtml = (template, data, cdn = 'https://unpkg.com') => `
<html>
    <head>
        <style>
            body {
                visibility: hidden;
                margin: 0;
            }
        </style>
        <script type="module">
            import '${cdn}/@javascribble/quantum/bundles/main-window.js';
            import '${cdn}/@javascribble/quantum-input';
            import '${cdn}/@javascribble/quantum-canvas';
            import '${cdn}/@javascribble/quantum-engine';

            document.body.style.visibility = 'visible';
        <script>
    </head>
    <body>
        <quantum-engine>${template}</quantum-engine>
        <script id="data" type="application/json">${data}</script>
        <script type="text/javascript">
            const data = JSON.parse(document.querySelector('#data').innerHtml);
            const engine = document.querySelector('quantum-engine');
            engine.load(data);
        </script>
    </body>
</html>
`;