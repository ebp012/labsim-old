<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/versions">
  <html>
	<head>
		<title><xsl:value-of select="pagetitle"/></title>
	</head>
  <body>
  <h2><xsl:value-of select="pagetitle"/>/Update History</h2>
    <xsl:for-each select="version">
			<h3><xsl:value-of select="@name"/></h3>
			<ul>
					<xsl:for-each select="item"><li><xsl:value-of select="value"/></li></xsl:for-each>
			</ul>
    </xsl:for-each>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>