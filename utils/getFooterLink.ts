import footerLinks from '../config/footerLinks';

interface FooterLink {
    label: string;
    url: string;
}

export const getFooterLinkByLabel = (label: string): FooterLink | undefined => {
    return footerLinks.find(link => link.label === label);
};
