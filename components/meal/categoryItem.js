// categoryItem.js
function CategoryItem({ category }) {
    console.log(category);

    const description = category.strCategoryDescription.split(' ').slice(0, 5).join(' ');

    return (
        <div className="col-sm-6 col-md-4 col-lg-3" key={category.idCategory}>
            {category &&
                <div className="card pt-3 mb-3">
                    <img src={category.strCategoryThumb} className="card-img-top" alt={category.strCategory} />
                    <div className="card-body">
                        <h5 className="card-title text-center">{category.strCategory}</h5>
                        <p className="card-text text-center" title={category.strCategoryDescription}>
                            {description}
                            {category.strCategoryDescription.split(' ').length > 5 && '...'}
                        </p>
                    </div>
                </div>
            }
        </div>
    );
}