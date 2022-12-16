import { useEffect, useState } from 'react';

function useDescription(description) {
    const [desMod, setDesMod] = useState(description);

    useEffect(() => {
        let des = description.split(' ');

        let descriptionMod;

        if (des[0].search('#') !== -1) {
            descriptionMod = [{ value: 'hastag', text: '' }];
        } else {
            descriptionMod = [{ value: 'text', text: '' }];
        }

        des.map((word, index) => {
            var length = descriptionMod.length - 1;
            if (word.search('#') === -1) {
                if (descriptionMod[length].value === 'text') {
                    var des = [descriptionMod[length].text, word].join(' ');
                    descriptionMod[length].text = des;
                } else {
                    descriptionMod = [...descriptionMod, { value: 'text', text: word }];
                }
            } else {
                descriptionMod = [...descriptionMod, { value: 'hastag', text: word }];
            }
            return null;
        });

        descriptionMod.map((item, index) => {
            index = index + 1 > descriptionMod.length - 1 ? -1 : index + 1;
            if (index !== -1) {
                if (item.value === 'text') {
                    if (descriptionMod[index].value === 'hastag') {
                        var des = item.text.concat(' ');
                        item.text = des;
                    }
                }
            }
            return null;
        });

        descriptionMod[0].text = descriptionMod[0].text.substring(1);

        setDesMod(descriptionMod);
    }, [description]);

    return desMod;
}

export default useDescription;
