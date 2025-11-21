import doughSizes from "@/common/data/doughSizes";
import ingredients from "@/common/data/ingredients";
import sauces from "@/common/data/sauces";
import sizes from "@/common/data/sizes";

export const normalizeDough = (dough) => {
    return {
        ...dough,
        value: doughSizes[dough.id],
    };
};

export const normalizeSize = (size) => {
    return {
        ...size,
        value: sizes[size.id],
    };
};

export const normalizeIngredients = (ingredient) => {
    const slug = ingredient.image
        .split("/")
        .pop()
        .replace(".svg", "");

    return {
        id: ingredient.id,
        name: ingredient.name,
        price: ingredient.price,
        image: ingredient.image,
        value: slug,
    };
};

export const normalizeSauces = (sauce) => {
    return {
        ...sauce,
        value: sauces[sauce.id],
    };
};
