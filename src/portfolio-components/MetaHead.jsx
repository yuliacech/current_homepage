import React from "react";
import {Helmet} from "react-helmet";


class MetaHead extends React.Component {
  render() {
    const items = [<meta charSet="utf-8" />, <meta lang="en"/>];
    if (this.props.config.meta && this.props.config.meta.title) {
      items.push(<title key={items.length + 1}> {this.props.config.meta.title}</title>);
    }
    if (this.props.config.meta && this.props.config.meta.description) {
      items.push(<meta key={items.length + 1} name="description" content={this.props.config.meta.description}/>);
    }
    if (this.props.config.font && this.props.config.font.link) {
      items.push(<link key={items.length + 1} href={this.props.config.font.link} rel="stylesheet"/>);
    }
    return (<Helmet>{items}</Helmet>);
  }
}

export default MetaHead;
