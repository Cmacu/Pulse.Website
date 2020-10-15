// @ts-nocheck
'undefined' === typeof window.tickcounter &&
  ((window.tickcounter = function () {
    var h = function (b, g) {
      b.style.cssText =
        'pointer-events: auto !important; border: none; margin: 0; padding: 0; overflow: hidden; width: 100%; height: 100%;'
      'relative' === window.getComputedStyle(g).getPropertyValue('position') &&
        (b.style.cssText +=
          'position: absolute; top: 0; bottom: 0; left: 0; right: 0;')
    }
    ;(function () {
      for (
        var b = [],
          b = Array.prototype.concat.apply(
            b,
            document.getElementsByClassName('tcw'),
          ),
          b = Array.prototype.concat.apply(
            b,
            document.getElementsByClassName('tickcounter'),
          ),
          g = 0;
        g < b.length;
        ++g
      ) {
        var a = b[g],
          d
        a.href
          ? (d = a.host)
          : ((d = a.getElementsByTagName('a')),
            (d = 0 !== d.length && d[0].href ? d[0].host : !1))
        if (d) {
          var f = void 0,
            c
          a.innerHTML = ''
          var e = document.createElement('iframe')
          if (a.hasAttribute('data-id'))
            (c = a.getAttribute('data-id')),
              a.hasAttribute('data-type')
                ? ((f = a.getAttribute('data-type')), h(e, a))
                : ((c = c.split('-')),
                  (f = c[0].toLowerCase()),
                  (c = c[1]),
                  (e.style.cssText =
                    'pointer-events: auto !important; border: none; margin: 0; padding: 0; overflow: hidden; width: 100%; height: 100%; display: inline-block;'),
                  (e.style.cssText +=
                    'position: absolute; top: 0; bottom: 0; left: 0; right: 0;')),
              (e.src = '//' + d + '/widget/' + f + '/' + c)
          else {
            h(e, a)
            c = []
            for (f in a.dataset)
              a.dataset.hasOwnProperty(f) &&
                c.push(f + '=' + encodeURIComponent(a.dataset[f]))
            e.src = '//' + d + '/widget?' + c.join('&')
          }
          e.scrolling = 'no'
          a.appendChild(e)
        } else
          a.innerHTML = 'Please do not remove our link from your embed code.'
      }
    })()
  }),
  'loading' === document.readyState
    ? document.addEventListener(
        'DOMContentLoaded',
        function () {
          window.tickcounter()
        },
        !1,
      )
    : window.tickcounter())
