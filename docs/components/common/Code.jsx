/* jshint node: true, esnext: true */
"use strict";

var React = require('react');
var ReactCSS = require('reactcss');
var markdown = require('../../helpers/markdown');

var { Tile } = require('react-material-design');



module.exports = class Code extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        shortCodeBlock: {
          display: 'inline-block'
        },
        shortCode: {
          padding: '14px 16px'
        },
        head: {
          borderRadius: '2px 2px 0 0',
          background: '#fafafa'
        },
        files: {
          display: 'inline-block'
        },
        Files: {
          align: 'none',
          color: '#666'
        },
        center: {
          fontFamily: 'Monaco',
          fontSize: '14px',
          lineHeight: '19px',
          color: 'rgba(0,0,0,.77)'
        },
        numbers: {
          fontSize: '14px',
          lineHeight: '19px',
          display: 'inline-block',
          textAlign: 'right',
          color: 'rgba(0,0,0,.20)',
          userSelect: 'none'
        },
      },
      'condensed': {
        Tile: {
          condensed: true
        },
        center: {
          paddingTop: '16px',
          paddingBottom: '16px',
          fontSize: '13px',
          lineHeight: '15px',
          overflowX: 'scroll'
        },
        numbers: {
          paddingTop: '16px',
          fontSize: '13px',
          lineHeight: '15px'
        }
      }
    };
  }

  styles() {
    return this.css({
      'condensed': this.context.mobile
    });
  }

  render() {
    var code = markdown.getBody( this.props.file );
    var colorCoded = markdown.renderCode('```\n' + code + '```').trim();
    var lines = colorCoded.split('\n').length;

    return (
      <div>

        <style>{`
          .rendered{
            color: #607D8B; // blue grey 500
          }
          .rendered .hljs-comment {
            color: #B0BEC5; // blue grey 200
          }
          .rendered .hljs-keyword{
            color: #EF9A9A;  // red 200
          }
          .rendered .hljs-string{
            color: #689F38; // light green 700
          }
          .rendered .hljs-title{
          }
        `}</style>

        <Tile is="Tile">
          <div is="numbers">
            1
          </div>
          <div is="center">
            <style>{`
              .rendered pre{
                margin: 0;
              }
              .rendered p{
                margin: 0;
              }
            `}</style>
            <div className="rendered" dangerouslySetInnerHTML={{ __html: colorCoded }} />
          </div>
        </Tile>


      </div>
    );
  }
}