import React, { Component } from 'react'

class CollectionBox extends Component {
    render() {
        return (
            <div>
                <main>
                    <section>
                        <div className="container">
                            <h2 className="title-3">Collections</h2>
                            <div className="row">
                                <div className="inside">
                                    {this.props.topics.map((topic, index) => {
                                        return (
                                            <div className="col-md-4 col-sm-6 recipe" key={index}>
                                                <img src={topic.image} alt={topic.name} className="img-recipe" />
                                                <h2 align="center">{topic.name}</h2>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default CollectionBox