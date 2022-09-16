import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Pagination = ({ pageContext }) => {
    const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } =
        pageContext;

    return (
        <nav className="pagination" role="navigation">
            <div>
                {previousPagePath && (
                    <Link to={previousPagePath} rel="prev">
                        Précédente
                    </Link>
                )}
            </div>
            {numberOfPages > 1 && (
                <div className="pagination-location">
                    Page {humanPageNumber} de {numberOfPages}
                </div>
            )}
            <div>
                {nextPagePath && (
                    <Link to={nextPagePath} rel="next">
                        Suivante
                    </Link>
                )}
            </div>
        </nav>
    );
};

Pagination.propTypes = {
    pageContext: PropTypes.object.isRequired,
};

export default Pagination;
