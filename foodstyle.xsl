<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml">

<xsl:template match="/">
  <html>
  <body>
  <h2>Menu Items</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th>Name</th>
      <th>Description</th>
      <th>Price</th>
      <th>Spice Level</th>
      <th>Calories</th>
    </tr>
    <xsl:for-each select="Menu/Appetiser/FoodItem">
    <tr>
      <td><xsl:value-of select="name"/></td>
      <td><xsl:value-of select="description"/></td>
      <td><xsl:value-of select="price"/></td>
      <td><xsl:value-of select="spice"/></td>
      <xsl:if test="calories >= 500">
        <td>High Calories</td>
    </xsl:if>
    <xsl:if test="calories >= 350 and calories &lt; 450">
        <td>Medium Calories</td>
    </xsl:if>
    <xsl:if test="calories &lt; 350">
        <td>Low Calories</td>
    </xsl:if> 

    </tr>
    </xsl:for-each>
  </table>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>