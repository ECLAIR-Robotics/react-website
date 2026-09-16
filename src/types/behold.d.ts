declare namespace JSX {
  interface IntrinsicElements {
    'behold-widget': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & { 'feed-id': string },
      HTMLElement
    >;
  }
}
