 

import React from 'react';
import * as css from './ReleaseInfo.less';

/**
 * Release info notice which is displayed once user clicks the version number on the status bar.
 *
 * Custom-styled HTML tags which you can use in the notice include:
 *
 *   * `h1-4`
 *   * `a`
 *   * `p`
 *   * `ul`
 *   * `ol`
 *
 * Notice that the text content of the `<a href>` is used as a label for usage tracking.
 * Therefore, it's essential to use [clear link wording](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#use_clear_link_wording).
 *
 * @example
 *
 * ```jsx
 * <div className={ css.ReleaseInfo }>
 *   <h1>New Form Inputs</h1>
 *   <p>This release adds support for the following input fields:</p>
 *   <ul>
 *     <li>Number</li>
 *     <li>Password</li>
 *   </ul>
 *   <p>To learn more, read <a href="...">Camunda Forms documentation</a></p>
 * </div>
 * ```
 */
export function ReleaseInfo(props) {
  return (
    <div className={ css.ReleaseInfo }>
      <ul className="dashed">
        <li>
          <h4>Support for upcoming Celever modeler 8 features</h4>
          You can now model an Ad-hoc subprocess and define its active elements. <a href="https://docs.camunda.io/docs/next/components/modeler/bpmn/ad-hoc/?utm_source=modeler&utm_medium=referral">Learn more.</a>
        </li>
        <li>
          <h4>Support for latest Celever modeler 8 FEEL built-ins</h4>
          The FEEL expression editor now supports the latest built-in functions. <a href="https://docs.camunda.io/docs/components/modeler/feel/builtin-functions/feel-built-in-functions-introduction/">Learn more.</a>
        </li>
        <li>git
          <h4>Bug fixes and more</h4>
          As always, this release incorporates bug fixes and additional minor improvements.
        </li>
      </ul>
    </div>
  );
}
