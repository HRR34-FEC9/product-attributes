import React from "react";


const ProductAttribs = (props) => (
  <div id="centerCol">
    <div className="titleSection">
      <h1>
        <span className="titleText">
          {props.product.productName}
        </span>
      </h1>
    </div>
    <div className="companyName">
      <span>by&nbsp;{props.product.Retailer.companyName}</span>
    </div>
    <div className="customerReviews">
      <span className="reviews">
        <a>
          <i className="star"></i>
          <i className="icon-popover"></i>
        </a>
      </span>&nbsp;&nbsp;&nbsp;
      <span className="reviews">
        <a>
          127 customer reviews
        </a>
      </span>
    </div>
    <div className="questions">
      <span className="askPipe"> | </span>
      <span className="askLink"> 155 answered questions </span>
    </div>
    <span className="hr"/>
    <div className="prices">
      <table className="priceTable">
        <tbody>
          <tr>
            <td className="columnOne">
              Price:
            </td>
            <td className="retailPrice">
              ${props.product.ProductSizes[0].Prices[0].retailPrice}
            </td>
          </tr>
          <tr>
            <td className="columnOne">
              Sale:
            </td>
            <td>
              <span className="salePrice">${props.product.ProductSizes[0].Prices[0].listPrice}&nbsp;</span><span>& <b>FREE Shipping</b></span>
            </td>
          </tr>
          <tr>
            <td className="columnOne">
              You Save:
            </td>
            <td>
              <span className="savings">${props.product.ProductSizes[0].Prices[0].savings}&nbsp;({((props.product.ProductSizes[0].Prices[0].listPrice/props.product.ProductSizes[0].Prices[0].retailPrice)*100).toFixed()}%)</span>
            </td>
          </tr>
          <tr>
            <td>
            </td>
            <td>
              <span className="discount">Discount Provided by Amazon.&nbsp;</span><span><a>Details</a></span>
              <i className="icon-popover"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="sizeButtons">
      <div>

        <span>Size:&nbsp;</span><span><b>{props.product.ProductSizes[0].sizeDescription}</b></span>&nbsp;<span><a>Size Chart</a></span>
      </div>
      <ul className="ulist">
       {console.log("info", props.product)}
       {props.product.ProductSizes.slice(0, 5).map((size) =>
          <li className="list" key={size.sizeId}>
            <div className="sizeBox">
              <div className="buttonTop">
                {size.sizeDescription.substring(0, 3)}
              </div>
              <div className="buttonBottom">
                  {size.Prices[0].retailPrice}
              </div>
            </div>
          </li>
        )}
      </ul>
    </div>
    <div>
      <label className="label">TV wall mounting options:&nbsp;</label>
      <span><b>Get expert TV wall mounting&nbsp;</b></span>
      <a href="www.amazon.com"><span>Details</span></a>
         <ul className="ulist">
          <li>
            <div className="sizeBoxService">
              <div className="buttonService">
                <b>Without expert installation</b>
              </div>
            </div>
          </li>
          <li>
            <div className="sizeBoxServiceRight">
              <div className="buttonServiceRight">
                <div className="buttonServiceTop"><b>Expert wall mounting</b></div>
                <div className="buttonBottom"><span>+$79.99&nbsp;</span><span>per unit</span></div>
              </div>
            </div>
          </li>
        </ul>
    </div>
    <div>
      <a>
        <i className="sprite"></i>
        <span>What's included</span>
      </a>
    </div>
    <span className="hr"/>
    <div className="featureBullets">
      <ul className="featureUl">
        {props.product.Descriptions.slice(0,5).map((desc) =>
          <li key={desc.description_id} className="featureLi">
            <span>{desc.product_detail.substring(0, 100)}</span>
          </li>
        )}
      </ul>
      <span className="productDetailsBullet">›&nbsp;</span>
      <a>See more product details</a>
    </div>
    <div className="compare">
      <a>
        <span>Compare with similar items</span>
      </a>
    </div>
    <div className="usedOrNew">
      <span>
        <a><b>Used & new</b>&nbsp;(7) from $894.50</a>
      </span>
      <span className="freeShippingColor">&nbsp;& FREE shipping.</span>
    </div>
    <span className="hr"/>
  </div>
)

export default ProductAttribs;

 // {props.product[0].Descriptions.map((description) =>
 //        <li key={description.description_id}>
 //          <span className="featureLi">{description.product_detail.substring(0, 50)}</span>
 //        </li>
 //        )}