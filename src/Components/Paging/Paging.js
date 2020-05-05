import React from "react";
import Left from "@material-ui/icons/ChevronLeft";
import Right from "@material-ui/icons/ChevronRight";
import First from "@material-ui/icons/FirstPage";
import Last from "@material-ui/icons/LastPage";
import IconButton from "@material-ui/core/IconButton";
import Typography from '@material-ui/core/Typography';
import { withRouter } from "react-router-dom";


const Paging = props => {

  let { parsedQS } = props;
  let itemsPerPage = parseInt(parsedQS.itemsPerPage) || 12;
  let page = parseInt(parsedQS.page) || 1;
  let totalPages = Math.ceil(props.totalItemsCount / itemsPerPage);

  if (!props.totalItemsCount) return null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <IconButton
        size="small"
        color="primary"
        disabled={page === 1}
        onClick={() => {
          props.updateQueryString({ page: 1 });
        }}
        style={{ marginRight: 10 }}
      >
        <First />
      </IconButton>
      <IconButton
        size="small"
        color="primary"
        disabled={page === 1}
        onClick={() => {
          props.updateQueryString({ page: page - 1 });
        }}
        style={{ marginRight: 10 }}
      >
        <Left />
      </IconButton>
      <Typography variant="body1">Page {page} of {totalPages}</Typography>
      <IconButton
        size="small"
        color="primary"
        disabled={page >= totalPages.toString()}
        onClick={() => {
          props.updateQueryString({ page: page + 1 });
        }}
        style={{ marginLeft: 10, marginRight: 10 }}
      >
        <Right />
      </IconButton>
      <IconButton
        size="small"
        color="primary"
        disabled={page >= totalPages.toString()}
        onClick={() => {
          props.updateQueryString({ page: totalPages });
        }}
        style={{ marginRight: 10 }}
      >
        <Last />
      </IconButton>

    </div>
  );
};

export default withRouter(Paging);
