;(function() {
    $(document).ready(function() {
        $('select').material_select();

        bootstrap();
    });

    var m = byId('m'),
        n = byId('n'),
        out = byId('out');


    function byId(id) {
        return document.getElementById(id)
    }

    function update() {
        var val = +n.value;
        var modif = m.value === '+' ? 1 : -1;

        var value = (val + (100 * modif)) / 100;

        if(+value === value) {
            out.innerText = value;
        }
    }

    function bootstrap () {
        n.addEventListener('keyup', update);
        m.addEventListener('change', update);
    }
})();
