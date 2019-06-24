// panzoom
import "jquery.panzoom"

const $lightbox = $('#lightbox').first()

$lightbox.find('#panzoom').panzoom({
    $zoomIn: $lightbox.find("#zoom-in"),
    $zoomOut: $lightbox.find("#zoom-out"),
    $reset: $lightbox.find("#zoom-reset")
});