import React, { useEffect, useState } from 'react';
import ItemPicker from './subcomponents/ItemPicker';
import imageThree from '../assets/bronze.jpg';
import imageTwo from '../assets/silver.jpg';
import imageOne from '../assets/gimnasia.jpg';
import PageService from '../services/PageService';

function Categories() {
    const [winners, setWinners] = useState([]);
    useEffect(() => {
        PageService.getWinners().then(response => {
            console.log(response);
            let goldCount = 0, silverCount = 0, bronzeCount = 0;
            response.forEach((winner) => {
                goldCount += winner.gold;
                silverCount += winner.silver;
                bronzeCount += winner.bronze;
            });
            setWinners([
                {
                    title: "Oro",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec nisi sed massa pharetra tempus. Pellentesque gravida ante quis ex dapibus iaculis. Sed eu vulputate nulla, quis imperdiet orci. Vestibulum pulvinar dapibus mi at placerat. Morbi vitae fermentum quam. Mauris bibendum ante ac nisi suscipit, placerat egestas est lobortis. Phasellus ante nisl, posuere a scelerisque et, fermentum at neque. Curabitur blandit mi non vehicula luctus. Donec pretium rutrum nunc vitae pulvinar. Integer euismod massa non pretium pellentesque. <br/> Vivamus convallis congue tellus, a aliquam tortor tempus ac.Cras vel faucibus dolor.Fusce pulvinar ante sapien, ac viverra ex congue vitae.Phasellus ornare nisi ut metus iaculis, id laoreet sapien aliquam.Morbi lobortis eros eu risus imperdiet ornare.Sed nec leo quis turpis porta sollicitudin at a ligula.Nullam maximus venenatis venenatis.Cras tristique magna nec erat tempor, quis fringilla massa consequat.Mauris vel lorem sit amet erat rutrum euismod.Proin et tellus rutrum, pretium enim quis, porttitor leo.Cras tincidunt at sem et molestie.Donec sollicitudin laoreet dolor, et efficitur eros volutpat ut.",
                    subtitle: goldCount,
                    image: imageOne,
                },
                {
                    title: "Plata",
                    description: "Mauris aliquet justo odio, quis bibendum massa finibus id. Duis risus arcu, condimentum non nulla at, viverra elementum massa. Nam et sem a magna aliquam consectetur. Sed quis est euismod, volutpat justo semper, vehicula lacus. Quisque semper tortor at lacus efficitur imperdiet. <br/> Quisque vitae cursus velit. Vivam",
                    subtitle: silverCount,
                    image: imageTwo,
                },
                {
                    title: "Bronce",
                    description: "Mauris placerat velit at pulvinar consectetur. Vestibulum porttitor sapien et libero varius viverra. Nam pulvinar laoreet dolor id tincidunt. Donec in congue tellus, ac dignissim dui. Donec convallis nulla venenatis, scelerisque lorem vitae, molestie dui. Nam sit amet tellus sem. Nunc dapibus, est et laoreet facilisis, velit quam rutrum nunc, non bibendum diam metus dictum est. <br/> Nam laoreet velit nec arcu interdum pharetra. Sed porttitor auctor ullamcorper. Pellentesque finibus, diam sit amet vestibulum lacinia, neque massa auctor mauris, et gravida quam justo sit amet neque. Integer commodo vitae odio a sagittis. Pellentesque porta urna leo, at vehicula elit congue at. Morbi non eros porttitor tellus ultricies faucibus. Nullam lacinia sagittis massa blandit aliquet. Pellentesque at mauris tortor. Duis ac posuere nisl. Nunc tristique cursus nulla, eget dapibus libero venenatis eu. Duis ut eleifend nulla.",
                    subtitle: bronzeCount,
                    image: imageThree,
                }
            ]);
        }).catch(err=>console.log(err))
    }, []);
    return <div>
        {/* item picker */}
        <div className="py-5 bgMainLight">
            <ItemPicker items={winners} />
        </div>

    </div>
}

export default Categories;