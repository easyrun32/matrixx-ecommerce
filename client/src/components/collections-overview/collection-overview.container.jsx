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
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";
import { compose } from "redux";
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);
//these are the same
//const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview))

export default CollectionsOverviewContainer;
