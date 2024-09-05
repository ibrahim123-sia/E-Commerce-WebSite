import p1_img from './p1.jpg'
import p2_img from './p2.jpg'
import p3_img from './p3.jpg'
import p4_img from './p4.jpg'
import p5_img from './p5.jpg'
import p6_img from './p6.jpg'
import p7_img from './p7.jpg'
import p8_img from './p8.jpg'
import p9_img from './p9.jpg'
import p10_img from './p10.jpg'
import p11_img from './p11.jpg'
import p12_img from './p12.jpg'
import p13_img from './p13.jpg'
import p14_img from './p14.jpg'
import p15_img from './p15.jpg'
import p16_img from './p16.jpg'
import p17_img from './p17.jpg'
import p18_img from './p18.jpg'
import p19_img from './p19.jpg'
import p20_img from './p20.jpg'
import p21_img from './p21.jpg'
import p22_img from './p22.jpg'
import p23_img from './p23.jpg'
import p24_img from './p24.jpg'
import p25_img from './p25.jpg'
import p26_img from './p26.jpg'
import p27_img from './p27.jpg'
import p28_img from './p28.jpg'
import p29_img from './p29.jpg'
import p30_img from './p30.jpg'
import p31_img from './p31.jpg'
import p32_img from './p32.jpg'
import p33_img from './p33.jpg'
import p34_img from './p34.jpg'
import p35_img from './p35.jpg'
import p36_img from './p36.jpg'

let all_products = [
    
    { id: 1, category: "mens", name: "Classic Button Shirt - A Timeless Essential for Every Wardrobe", image: p1_img, new_price: 60.00, old_price: 90.00 },
    { id: 2, category: "mens", name: "Slim Fit Polo - Perfectly Tailored for a Modern Look", image: p2_img, new_price: 45.00, old_price: 70.00 },
    { id: 3, category: "mens", name: "Checked Shirt - Stylish and Comfortable for Any Occasion", image: p3_img, new_price: 65.00, old_price: 95.00 },
    { id: 4, category: "mens", name: "Long Sleeve Shirt - Versatile and Trendy for All Seasons", image: p4_img, new_price: 70.00, old_price: 100.00 },
    { id: 5, category: "mens", name: "Denim Shirt - Rugged and Durable for Everyday Wear", image: p5_img, new_price: 75.00, old_price: 110.00 },
    { id: 6, category: "mens", name: "Henley Shirt - Casual Yet Refined for Any Casual Event", image: p6_img, new_price: 50.00, old_price: 75.00 },
    { id: 7, category: "mens", name: "Oxford Shirt - A Classic Choice for Formal and Casual Settings", image: p7_img, new_price: 68.00, old_price: 98.00 },
    { id: 8, category: "mens", name: "Tropical Shirt - Vibrant and Fun for Summer Days", image: p8_img, new_price: 58.00, old_price: 85.00 },
    { id: 9, category: "mens", name: "Utility Shirt - Functional and Fashionable for Any Adventure", image: p9_img, new_price: 72.00, old_price: 100.00 },
    { id: 10, category: "mens", name: "Flannel Shirt - Cozy and Classic for Cooler Weather", image: p10_img, new_price: 67.00, old_price: 96.00 },
    { id: 11, category: "mens", name: "Chino Shirt - Stylish and Comfortable for Everyday Wear", image: p11_img, new_price: 65.00, old_price: 95.00 },
    { id: 12, category: "mens", name: "Crew Neck Tee - A Staple Piece for Casual Outfits", image: p12_img, new_price: 38.00, old_price: 55.00 },

    
    { id: 13, category: "womens", name: "V-Neck Blouse - Elegant and Sophisticated for Any Event", image: p13_img, new_price: 55.00, old_price: 85.00 },
    { id: 14, category: "womens", name: "Casual Shirt - Easygoing and Comfortable for Daily Wear", image: p14_img, new_price: 52.00, old_price: 82.00 },
    { id: 15, category: "womens", name: "Peplum Top - Flattering and Fashionable for a Feminine Touch", image: p15_img, new_price: 57.00, old_price: 87.00 },
    { id: 16, category: "womens", name: "Bell Sleeve Blouse - Romantic and Stylish for Special Occasions", image: p16_img, new_price: 62.00, old_price: 92.00 },
    { id: 17, category: "womens", name: "Lace Trim Top - Delicate and Chic for a Refined Look", image: p17_img, new_price: 48.00, old_price: 70.00 },
    { id: 18, category: "womens", name: "Ruffled Blouse - Playful and Elegant for Any Event", image: p18_img, new_price: 60.00, old_price: 88.00 },
    { id: 19, category: "womens", name: "Cold Shoulder Top - Trendy and Breezy for Warm Weather", image: p19_img, new_price: 53.00, old_price: 78.00 },
    { id: 20, category: "womens", name: "Peasant Blouse - Bohemian and Beautiful for a Relaxed Style", image: p20_img, new_price: 56.00, old_price: 84.00 },
    { id: 21, category: "womens", name: "Tie-Front Top - Stylish and Versatile for Modern Fashion", image: p21_img, new_price: 55.00, old_price: 83.00 },
    { id: 22, category: "womens", name: "Smocked Top - Comfortable and Cute for Everyday Wear", image: p22_img, new_price: 50.00, old_price: 78.00 },
    { id: 23, category: "womens", name: "Kimono Top - Flowing and Elegant for a Sophisticated Look", image: p23_img, new_price: 59.00, old_price: 85.00 },
    { id: 24, category: "womens", name: "Lace Trim Top - Graceful and Stylish for Any Occasion", image: p24_img, new_price: 48.00, old_price: 70.00 },

    
    { id: 25, category: "kids", name: "Flutter Sleeve Overlap - Adorable and Comfortable for Little Ones", image: p25_img, new_price: 50.00, old_price: 80.00 },
    { id: 26, category: "kids", name: "Graphic Tee - Fun and Colorful for Everyday Adventures", image: p26_img, new_price: 35.00, old_price: 50.00 },
    { id: 27, category: "kids", name: "Round Neck Tee - Casual and Cute for Any Day of the Week", image: p27_img, new_price: 30.00, old_price: 45.00 },
    { id: 28, category: "kids", name: "Striped Polo - Classic and Playful for Active Kids", image: p28_img, new_price: 40.00, old_price: 60.00 },
    { id: 29, category: "kids", name: "Plaid Button-Up - Stylish and Comfortable for School and Play", image: p29_img, new_price: 38.00, old_price: 55.00 },
    { id: 30, category: "kids", name: "Vintage Tee - Trendy and Relaxed for a Cool Look", image: p30_img, new_price: 36.00, old_price: 52.00 },
    { id: 31, category: "kids", name: "Colorblock Hoodie - Cozy and Fun for Chilly Days", image: p31_img, new_price: 40.00, old_price: 58.00 },
    { id: 32, category: "kids", name: "Sports Jersey - Energetic and Cool for Little Athletes", image: p32_img, new_price: 30.00, old_price: 45.00 },
    { id: 33, category: "kids", name: "Printed Tank - Bright and Playful for Summer Fun", image: p33_img, new_price: 25.00, old_price: 35.00 },
    { id: 34, category: "kids", name: "Floral Dress - Sweet and Lovely for Special Occasions", image: p34_img, new_price: 45.00, old_price: 65.00 },
    { id: 35, category: "kids", name: "Denim Vest - Stylish and Trendy for Little Fashionistas", image: p35_img, new_price: 50.00, old_price: 70.00 },
    { id: 36, category: "kids", name: "Layered Skirt - Fun and Flouncy for Playdates and Beyond", image: p36_img, new_price: 42.00, old_price: 60.00 },
];

export default all_products;
