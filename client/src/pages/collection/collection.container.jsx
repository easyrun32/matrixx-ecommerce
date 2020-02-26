//for shop page
/*
because of the props
isFetchingCollection,
isCollectionsLoaded

is overwelming the shop class they are only
used to pass into values

Shoppage doesnt care about wether
CollectionOverWithSpinner is loaded or not 
soooo

those components in shopage should be concerned
wether they are loaded >:(

so we are gonna leverage HIGH ORDER COMPONENTS
and this uses the Container Pattern :)

*/

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});
const CollectionsPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);
//these are the same
//const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview))

export default CollectionsPageContainer;
