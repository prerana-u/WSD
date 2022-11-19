<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

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
      <td><xsl:value-of select="calories"/></td>
    </tr>
    </xsl:for-each>
  </table>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>