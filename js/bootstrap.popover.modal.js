/* =========================================================
 * bootstrap-popover.js v1.3.0
 * http://twitter.github.com/bootstrap/javascript.html#popover
 * =========================================================
 * Copyright 2011 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */


!function( $ ){

 /* CSS TRANSITION SUPPORT (https://gist.github.com/373874)
  * ======================================================= */

  var transitionEnd

  $(document).ready(function () {

    $.support.transition = (function () {
      var thisBody = document.body || document.documentElement
        , thisStyle = thisBody.style
        , support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined
      return support
    })()

    // set CSS transition event type
    if ( $.support.transition ) {
      transitionEnd = "TransitionEnd"
      if ( $.browser.webkit ) {
      	transitionEnd = "webkitTransitionEnd"
      } else if ( $.browser.mozilla ) {
      	transitionEnd = "transitionend"
      } else if ( $.browser.opera ) {
      	transitionEnd = "oTransitionEnd"
      }
    }

  })


 /* MODAL PUBLIC CLASS DEFINITION
  * ============================= */

  var PopoverModal = function ( content, options ) {
    this.settings = $.extend({}, $.fn.popover.defaults)
    this.$element = $(content)
      .delegate('.close_icon', 'click.popover', $.proxy(this.hide, this))

    if ( options ) {
      $.extend( this.settings, options )

      if ( options.show ) {
        this.show()
      }
    }

    return this
  }

  PopoverModal.prototype = {

      toggle: function () {
        return this[!this.isShown ? 'show' : 'hide']()
      }

    , show: function () {
        var that = this
        this.isShown = true
        this.$element.trigger('show')

        escape.call(this)

        
        that.$element
          .show()
        
        if ($.support.transition && that.$element.hasClass('fade')) {
          that.$element[0].offsetWidth // force reflow
        }
        
        that.$element
          .addClass('in')
          .trigger('shown')
        

        return this
      }

    , hide: function (e) {
        e && e.preventDefault()

        var that = this
        this.isShown = false

        escape.call(this)

        this.$element
          .trigger('hide')
          .removeClass('in')

        function removeElement () {
          that.$element
            .hide()
            .trigger('hidden')

        }

        $.support.transition && this.$element.hasClass('fade') ?
          this.$element.one(transitionEnd, removeElement) :
          removeElement()

        return this
      }

  }


 /* MODAL PRIVATE METHODS
  * ===================== */

  function escape() {
    var that = this
    if ( this.isShown && this.settings.keyboard ) {
      $(document).bind('keyup.popover', function ( e ) {
        if ( e.which == 27 ) {
          that.hide()
        }
      })
    } else if ( !this.isShown ) {
      $(document).unbind('keyup.popover')
    }
  }


 /* MODAL PLUGIN DEFINITION
  * ======================= */

  $.fn.popover = function ( options ) {
    var popover = this.data('popovermodal')

    if (!popover) {

      if (typeof options == 'string') {
        options = {
          show: /show|toggle/.test(options)
        }
      }

      return this.each(function () {
        $(this).data('popovermodal', new PopoverModal(this, options))
      })
    }

    if ( options === true ) {
      return popover
    }

    if ( typeof options == 'string' ) {
      popover[options]()
    } else if ( popover ) {
      popover.toggle()
    }

    return this
  }

  $.fn.popover.PopoverModal = PopoverModal

  $.fn.popover.defaults = {
    keyboard: false
  , show: true
  }


 /* MODAL DATA- IMPLEMENTATION
  * ========================== */

  $(document).ready(function () {
    $('body').delegate('[data-controls-popovermodal]', 'click', function (e) {
      e.preventDefault()
      var $this = $(this).data('show', true)
      $('#' + $this.attr('data-controls-popovermodal')).popover( $this.data() )
    })
  })

}( window.jQuery || window.ender );