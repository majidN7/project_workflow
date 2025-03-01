 

const TRACKED_LINK_PARENT_IDS = [ 'version-info-overlay', 'welcome-page-cloud', 'welcome-page-platform', 'welcome-page-learn-more' ];

export default class LinkEventHandler {
  constructor(props) {
    this.track = props.track;

    document.addEventListener('click', this.trackClick);
  }

  trackClick = ({ target }) => {
    let payload, payloadType;

    for (const parent of TRACKED_LINK_PARENT_IDS) {

      if (target.matches(`#${parent} a[href]`)) {
        payload = {
          parent,
          label: target.textContent
        };
        payloadType = 'link';

        // Only provide href for external links
        if (target.href.startsWith('http') && !target.href.startsWith('http://localhost')) {
          payload.link = target.href;
          payload.type = 'external-link';
        } else {
          payload.type = 'internal-link';
        }
      }

      if (target.matches(`#${parent} button`)) {
        payloadType = 'button';
        payload = {
          parent,
          label: target.textContent,
          type: payloadType
        };
      }
    }

    if (payloadType) {
      const action = payloadType === 'link' ? 'opened' : 'clicked';
      const event = `${payloadType}:${action}`;

      this.track(event, payload);
    }

  };
}
