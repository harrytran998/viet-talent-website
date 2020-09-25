import { faLongArrowRight } from '@fortawesome/pro-solid-svg-icons';
import { faPhone, faEnvelopeOpen, faMapMarkedAlt } from '@fortawesome/pro-regular-svg-icons';
import { faGem, faHeadSideBrain, faAtomAlt } from '@fortawesome/pro-light-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';

export const loadIcons = () => {
  library.add(faGem, faLongArrowRight, faHeadSideBrain, faAtomAlt, faPhone, faEnvelopeOpen, faMapMarkedAlt);
};
