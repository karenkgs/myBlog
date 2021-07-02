import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        {/* Post 1 */}
        <div class="row">
          <div class="row align-items-center my-5">
            <div class="col-lg-5">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
              />
            </div>
            <div class="col-lg-7">
              <h2 class="font-weight-light">This is post #1</h2>
              <p>
                This is a super super super post and it's so cool so so so cool, really great, so great you would die.
              </p>
            </div>
          </div>
        </div>

        {/* Post 2 */}
        <div class="row">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <h2 class="font-weight-light">This is post #2</h2>
              <p>
                Ok, so for this post it's also really good. You should actually read all of them! It's crazy how great it is.
              </p>
            </div>
            <div class="col-lg-5">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Post 3 */}
        <div class="row">
          <div class="row align-items-center my-5">
            <div class="col-lg-5">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
              />
            </div>
            <div class="col-lg-7">
              <h2 class="font-weight-light">This is post #3</h2>
              <p>
                This is a super super super post and it's so cool so so so cool, really great, so great you would die.
              </p>
            </div>
          </div>
        </div>

        {/* Post 4 */}
        <div class="row">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <h2 class="font-weight-light">This is post #4</h2>
              <p>
                Ok, so for this post it's also really good. You should actually read all of them! It's crazy how great it is.
              </p>
            </div>
            <div class="col-lg-5">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;