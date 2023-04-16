import java.io.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.concurrent.atomic.AtomicInteger;

import static java.lang.Integer.*;

public class readYML {
    BufferedReader brReader;

    public float total;

    public static float round(float d, int decimalPlace) {
        BigDecimal bd = new BigDecimal(Float.toString(d));
        bd = bd.setScale(decimalPlace, BigDecimal.ROUND_HALF_UP);
        return bd.floatValue();
    }


    {
        FileWriter htmlWriter = null;
        try {
            int N = 10;
            int discount = -3;
            int Rule = 1; // rule is finally randomized for each product
            int pN = 100; // max product set for product, used to randomize each run each product.pN
            brReader = new BufferedReader(new FileReader("kantox/java/products.yml"));
            LocalDateTime now = LocalDateTime.now();
            String filepath= "cart_"+ Math.random()*10000 +"_rule" + Rule + "_N=" + N + "_pN=" + pN + ".html";
            htmlWriter = new FileWriter(filepath, false);
            
            String line;

            {
                ArrayList<Product> products = new ArrayList<Product>();

                try {
                    line = brReader.readLine();
                    while (line != null) {
                        // System.out.prlineintln();
                        Product product = new Product();
                        System.out.println();

                        if (line.contains("code")) {
                            line.trim();
                            String split[] = line.split(":", 2);
                            product.code = split[1].trim();
                            line = brReader.readLine();
                            // System.out.println(product.code);

                        }
                        if (line.contains("name")) {
                            line.trim();
                            String split[] = line.split(":", 2);
                            product.name = split[1].strip();
                            line = brReader.readLine();
                        }
                        if (line.contains("price")) {
                            line.trim();
                            String split[] = line.split(":", 2);
                            product.price = Float.valueOf(split[1]);
                            products.add(product);
                        }

                        line = brReader.readLine();
                    }
                } catch (IOException e) {
                    throw new RuntimeException(e);
                    //return result;
                }

                FileWriter finalHtmlWriter = htmlWriter;
                finalHtmlWriter.write(
                        "<html>\n" +
                                "<title>Kantox - QA Test V2.1</title>" +
                                "<body class='invert'>\n"  +
                                "<style>" +
                                ".invert { background-color: black; filter: invert(100%);}</style>" +
                                "<table border ='1'>" +
                                "<tr>" +
                                "<td>Product Code</td>" +
                                "<td>Name</td>" +
                                "<td>Price</td>" +
                                "<td>Quantity</td>" +
                                "<td>Rule</td>" +
                                "<td>Free</td>" +
                                "<td>newPrice(u)</td>" +
                                "<td>Discount</td>" +
                                "<td>subtotal</td>" +

                                "</tr>\n"
                );
total=0;
                products.forEach(p -> {
                    System.out.println(p.code);
                    System.out.println(p.name);
                    System.out.println(p.price);
                    p.n = (int) (pN*Math.random());
                    p.rule=((int) (Math.random()*3)+1);

                    switch (p.rule) {
                        case 1: p.free=Math.floorDiv(p.n,N)*N;
                                p.subtotal = p.price*(p.n);
                                total+=p.subtotal;
                            break;
                        case 2: if (p.n>N) {
                                                p.newPrice=(p.price-3);
                                                p.discount=discount;
                                                p.subtotal = p.newPrice*(p.n);
                                            }
                                else {
                                       p.subtotal = p.price*(p.n);
                                      }
                                total+=p.subtotal;
                            break;
                        case 3: if (p.n>N) {
                                                p.newPrice=p.price-33*(p.price/100);
                                                p.discount=-33;
                                                p.subtotal = p.newPrice*(p.n);
                                            }
                                else {
                                    p.subtotal = p.price*(p.n);
                                }
                                total+=p.subtotal;
                            break;
                        default: break;
                    }
                    try {
                        finalHtmlWriter.write(
                                "<tr>" +
                                        "<td>" + p.code + "</td>"  +
                                        "<td>" + p.name + "</td>"  +
                                        "<td>" + p.price + "</td>" +
                                        "<td>" + p.n + "</td>" +
                                        "<td>" + p.rule + "</td>" +
                                        "<td>" + p.free + "</td>" +
                                        "<td>" + round(p.newPrice,2) + "</td>" +
                                        "<td>" + round(p.discount, 2) + "</td>" +
                                        "<td>" + round(p.subtotal, 2) + "</td>" +
                                        "</tr>\n");
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }
                });
                finalHtmlWriter.write(
                        "<tr>" +
                        "<td></td>"  +
                        "<td></td>"  +
                        "<td></td>"  +
                        "<td></td>"  +
                        "<td></td>"  +
                        "<td></td>"  +
                        "<td></td>"  +
                        "<td>TOTAL</td>" +
                        "<td><B><I>"+ round(total,2) +"</I></B></td>" +
                        "</tr>\n"
                );
                finalHtmlWriter.write(
                        "</table>\n" +
                                "<BR><BR>1 - FreeRule (buy N get N free)<BR>" +
                                "2 - ReducedPriceRule (buy more than N pay a different price)<BR>" +
                                "3 - FractionPriceRule (buy more than N, pay a percentage of the original price)<BR>" +

                                "</body>\n"  +
                                "N=" + N +
                                "</tr>\n"
                );
finalHtmlWriter.close();

            }

        } catch (IOException e) {
            throw new RuntimeException(e);
        }


    }
}