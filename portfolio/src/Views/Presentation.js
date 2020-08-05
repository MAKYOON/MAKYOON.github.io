import React from 'react';
import {animated, useTransition} from "react-spring";

function Presentation() {

    const displayTransition = useTransition(true, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)'},
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })

    return (
        <section id="presentation" className="bg-gray-800 text-white">
        {
            displayTransition.map(({ item, key, props }) =>
                item &&
                <animated.div
                    key={key}
                    style={props}
                    className="flex flex-col items-center justify-around w-full h-screen"
                >
                    <h1 className="font-bold text-3xl"> PRESENTATION </h1>
                    <div>
                        <img className="rounded-full h-48 w-48" src={require("../Assets/photo.jpg")} alt="Photo de profil"/>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cum dolores eaque earum eligendi enim impedit, ipsam, itaque neque nobis nulla omnis, reiciendis. Accusamus alias at culpa debitis delectus exercitationem facere, facilis, illum magni nisi pariatur quae repudiandae sit, voluptates voluptatibus. Animi aperiam deleniti dignissimos dolor doloremque eligendi error exercitationem fuga fugit illum, incidunt ipsum iusto laborum maiores neque nobis nostrum nulla, numquam officiis quasi quidem rem rerum tempora tenetur veniam. Ad amet assumenda beatae ex facere id laboriosam modi, omnis perferendis placeat quam sed voluptas, voluptate? Ab at cum cupiditate dicta ducimus eius expedita fuga illum iste, magni modi non possimus sed temporibus unde veritatis voluptas. Architecto laboriosam neque officia veniam? Dignissimos et expedita, fugiat ipsum laboriosam magnam pariatur provident quasi recusandae sed. A accusamus commodi consequuntur dolor dolorem doloribus ducimus, ea expedita ipsam iusto maxime minus nemo nulla quidem recusandae sit suscipit temporibus tenetur totam voluptates. Alias fugiat nam necessitatibus qui sit? Cupiditate, eum modi quia repudiandae saepe tempore. Accusamus ad amet blanditiis ducimus earum eveniet explicabo, illum iure nam quas reiciendis saepe tempora ut vel voluptatum? Asperiores consectetur dolorem dolores eaque laborum minus neque officiis sint tenetur voluptatem. Enim exercitationem illum ipsa? Cum cupiditate dolor iure perferendis perspiciatis ratione totam voluptatum! Amet dicta dolorem dolores ea earum eius illum odio officia quasi voluptatem? Ab accusantium aliquam assumenda atque autem deserunt doloremque dolores esse, illo in inventore minima modi natus quod sapiente, sint veritatis voluptate. A adipisci commodi cum eos eum, harum hic impedit incidunt laborum magnam magni modi necessitatibus neque numquam omnis optio possimus praesentium quae quam quia quo rem sit tempora totam veniam voluptatem voluptates voluptatum. Aperiam aspernatur assumenda aut consequatur, deserunt eveniet ex incidunt itaque laborum libero nisi nostrum odio praesentium quaerat quam quis sit soluta ullam. Aperiam corporis dicta ex ipsum natus nemo nihil omnis porro recusandae voluptas. Ad asperiores cumque cupiditate distinctio, earum excepturi impedit libero magni molestiae, natus perferendis possimus, quia quibusdam ratione repellat sed voluptate! Accusamus delectus dicta doloremque expedita harum nisi, officia porro quas quia reprehenderit soluta sunt velit veritatis. Accusantium architecto corporis debitis eius enim, illum ipsum iste quae quia, quisquam quos totam voluptatum. Animi consequuntur cupiditate delectus, deserunt, doloribus eligendi error esse et eveniet excepturi exercitationem facilis fuga fugit in ipsa labore laudantium minima natus numquam obcaecati omnis pariatur quia quibusdam quis quo quos recusandae reiciendis repellendus rerum sequi, similique ullam voluptas voluptate? Ab explicabo modi quisquam rem.
                    </p>
                </animated.div>)
        }
        </section>
    );
}

export default Presentation;