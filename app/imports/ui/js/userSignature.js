export function ExpandCanvas() {
  // eslint-disable-next-line no-unused-vars
  window.requestAnimFrame = (function (callback) {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimaitonFrame ||
        // eslint-disable-next-line no-shadow
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };
  }());

  setTimeout(function () { // wait for 0.3 sec to load up
    const canvas = document.getElementById('sig-canvas');
    const ctx = canvas.getContext('2d');

    ctx.strokeStyle = '#222222';
    ctx.lineWidth = 50;


    // dynamically change the width & height of canvas based on the browser's size
    function resize() {
      const applicationSignature = document.getElementsByClassName('application-signature')[0];
      const setCanvasWidth = document.getElementsByClassName('set-canvas-width')[0];
      setCanvasWidth.height = applicationSignature.offsetHeight;
      setCanvasWidth.width = applicationSignature.offsetWidth - 16;
    }
    resize();

    // eslint-disable-next-line no-unused-vars
    window.onresize = function (event) {
      resize();
    };

    // dynamically change the date to today
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    document.getElementById('getDate').value = `${yyyy}-${mm}-${dd}`;
    document.getElementById('getDate').disabled = true;


    let drawing = false;
    let mousePos = {
      x: 0,
      y: 0,
    };
    let lastPos = mousePos;
    /* eslint-disable */
    canvas.addEventListener('mousedown', function (e) {
      drawing = true;
      lastPos = getMousePos(canvas, e);
    }, false);

    canvas.addEventListener('mouseup', function (e) {
      drawing = false;
    }, false);

    canvas.addEventListener('mousemove', function (e) {
      mousePos = getMousePos(canvas, e);
    }, false);

    // Add touch event support for mobile
    canvas.addEventListener('touchstart', function (e) {

    }, false);

    canvas.addEventListener('touchmove', function (e) {
      const touch = e.touches[0];
      const me = new MouseEvent('mousemove', {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      canvas.dispatchEvent(me);
    }, false);

    canvas.addEventListener('touchstart', function (e) {
      mousePos = getTouchPos(canvas, e);
      const touch = e.touches[0];
      const me = new MouseEvent('mousedown', {
        clientX: touch.clientX,
        clientY: touch.clientY,
      });
      canvas.dispatchEvent(me);
    }, false);

    canvas.addEventListener('touchend', function (e) {
      const me = new MouseEvent('mouseup', {});
      canvas.dispatchEvent(me);
    }, false);

    function getMousePos(canvasDom, mouseEvent) {
      const rect = canvasDom.getBoundingClientRect();
      return {
        x: mouseEvent.clientX - rect.left,
        y: mouseEvent.clientY - rect.top,
      };
    }

    function getTouchPos(canvasDom, touchEvent) {
      const rect = canvasDom.getBoundingClientRect();
      return {
        x: touchEvent.touches[0].clientX - rect.left,
        y: touchEvent.touches[0].clientY - rect.top,
      };
    }

    function renderCanvas() {
      if (drawing) {
        ctx.moveTo(lastPos.x, lastPos.y);
        ctx.lineTo(mousePos.x, mousePos.y);
        ctx.stroke();
        lastPos = mousePos;
      }
    }

    // Prevent scrolling when touching the canvas
    /* eslint-enable */
    document.body.addEventListener('touchstart', function (e) {
      if (e.target === canvas) {
        e.preventDefault();
      }
    }, false);
    document.body.addEventListener('touchend', function (e) {
      if (e.target === canvas) {
        e.preventDefault();
      }
    }, false);
    document.body.addEventListener('touchmove', function (e) {
      if (e.target === canvas) {
        e.preventDefault();
      }
    }, false);

    (function drawLoop() {
      // eslint-disable-next-line no-undef
      requestAnimFrame(drawLoop);
      renderCanvas();
    }());

    function clearCanvas() {
      canvas.width = canvas.width;
    }

    // Set up the UI
    const clearBtn = document.getElementById('sig-clearBtn');

    // eslint-disable-next-line no-unused-vars
    clearBtn.addEventListener('click', function (e) {
      clearCanvas();
    }, false);
  }, 500);
}
