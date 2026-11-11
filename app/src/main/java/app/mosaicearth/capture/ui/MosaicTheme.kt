package app.mosaicearth.capture.ui

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.Person
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.text.withStyle
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

/**
 * Official MosaicEarth Platform Design Tokens (aligned with MosaicEarth Web & Desktop).
 */
object MosaicColors {
    val CanvasBg = Color(0xFF090F0B)
    val TopBarBg = Color(0xFF0D1510)
    val PanelBg = Color(0xFF111B14)
    val CardBg = Color(0xFF152119)
    val CardElevated = Color(0xFF1A291F)
    val InputBg = Color(0xFF0E1711)

    val BorderSubtle = Color(0xFF263A2C)
    val BorderStrong = Color(0xFF3A5741)
    val BorderLime = Color(0x6699CC00)

    val Lime = Color(0xFF99CC00)
    val LimeBright = Color(0xFFA8DC1A)
    val LimeContainer = Color(0x2699CC00)
    val OnLime = Color(0xFF0B1308)

    val Emerald = Color(0xFF5CE0A8)
    val EmeraldContainer = Color(0x245CE0A8)
    val Sky = Color(0xFF6EC6FF)
    val SkyContainer = Color(0x246EC6FF)
    val Amber = Color(0xFFF4C152)
    val AmberContainer = Color(0x26F4C152)
    val Danger = Color(0xFFF06A6A)
    val DangerContainer = Color(0x26F06A6A)

    val TextPrimary = Color(0xFFEEF5F0)
    val TextSecondary = Color(0xFF9FB2A5)
    val TextMuted = Color(0xFF73877A)
}

private val MosaicDarkColorScheme = darkColorScheme(
    primary = MosaicColors.Lime,
    onPrimary = MosaicColors.OnLime,
    primaryContainer = Color(0xFF253812),
    onPrimaryContainer = Color(0xFFD9F788),
    secondary = MosaicColors.Emerald,
    onSecondary = Color(0xFF06291B),
    secondaryContainer = Color(0xFF173629),
    onSecondaryContainer = Color(0xFFB8F5DA),
    tertiary = MosaicColors.Amber,
    onTertiary = Color(0xFF2B1D00),
    background = MosaicColors.CanvasBg,
    onBackground = MosaicColors.TextPrimary,
    surface = MosaicColors.PanelBg,
    onSurface = MosaicColors.TextPrimary,
    surfaceVariant = MosaicColors.CardBg,
    onSurfaceVariant = MosaicColors.TextSecondary,
    outline = MosaicColors.BorderStrong,
    outlineVariant = MosaicColors.BorderSubtle,
    error = MosaicColors.Danger,
    onError = Color(0xFF2D0606),
)

private val MosaicTypography = Typography(
    headlineSmall = TextStyle(
        fontSize = 21.sp,
        lineHeight = 27.sp,
        fontWeight = FontWeight.Bold,
        letterSpacing = (-0.2).sp,
    ),
    titleLarge = TextStyle(
        fontSize = 18.sp,
        lineHeight = 24.sp,
        fontWeight = FontWeight.Bold,
    ),
    titleMedium = TextStyle(
        fontSize = 15.5.sp,
        lineHeight = 21.sp,
        fontWeight = FontWeight.SemiBold,
    ),
    titleSmall = TextStyle(
        fontSize = 13.5.sp,
        lineHeight = 18.sp,
        fontWeight = FontWeight.SemiBold,
    ),
    bodyMedium = TextStyle(
        fontSize = 14.sp,
        lineHeight = 20.sp,
    ),
    bodySmall = TextStyle(
        fontSize = 12.5.sp,
        lineHeight = 17.5.sp,
    ),
    labelLarge = TextStyle(
        fontSize = 13.sp,
        lineHeight = 18.sp,
        fontWeight = FontWeight.SemiBold,
    ),
    labelMedium = TextStyle(
        fontSize = 11.5.sp,
        lineHeight = 15.sp,
        fontWeight = FontWeight.SemiBold,
        letterSpacing = 0.3.sp,
    ),
    labelSmall = TextStyle(
        fontSize = 10.5.sp,
        lineHeight = 14.sp,
        fontWeight = FontWeight.Bold,
        letterSpacing = 0.6.sp,
    ),
)

@Composable
fun MosaicEarthTheme(content: @Composable () -> Unit) {
    MaterialTheme(
        colorScheme = MosaicDarkColorScheme,
        typography = MosaicTypography,
        shapes = Shapes(
            extraSmall = RoundedCornerShape(6.dp),
            small = RoundedCornerShape(8.dp),
            medium = RoundedCornerShape(12.dp),
            large = RoundedCornerShape(16.dp),
        ),
        content = content,
    )
}

/**
 * Iconic [ME] MosaicEarth platform top bar with optional back navigation and cloud account pill.
 */
@Composable
fun MosaicTopBar(
    subtitle: String? = null,
    onBack: (() -> Unit)? = null,
    accountLabel: String? = null,
    isSignedIn: Boolean = false,
    onAccountClick: (() -> Unit)? = null,
) {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .background(MosaicColors.TopBarBg)
            .statusBarsPadding()
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 14.dp, vertical = 10.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween,
        ) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                modifier = Modifier.weight(1f, fill = false),
            ) {
                if (onBack != null) {
                    IconButton(
                        onClick = onBack,
                        modifier = Modifier
                            .size(36.dp)
                            .clip(RoundedCornerShape(8.dp))
                            .background(MosaicColors.CardBg)
                            .border(1.dp, MosaicColors.BorderSubtle, RoundedCornerShape(8.dp))
                    ) {
                        Icon(
                            imageVector = Icons.AutoMirrored.Filled.ArrowBack,
                            contentDescription = "Enrere",
                            tint = MosaicColors.TextPrimary,
                            modifier = Modifier.size(18.dp),
                        )
                    }
                    Spacer(Modifier.width(10.dp))
                }
                // Signature [ME] Brand Mark matching MosaicEarth Web
                Box(
                    modifier = Modifier
                        .size(34.dp)
                        .clip(RoundedCornerShape(6.dp))
                        .background(Color(0xFF040705))
                        .border(1.dp, Color(0xFF344939), RoundedCornerShape(6.dp)),
                    contentAlignment = Alignment.Center,
                ) {
                    Text(
                        text = buildAnnotatedString {
                            withStyle(SpanStyle(color = Color.White, fontWeight = FontWeight.ExtraBold)) {
                                append("M")
                            }
                            withStyle(SpanStyle(color = MosaicColors.Lime, fontWeight = FontWeight.ExtraBold)) {
                                append("E")
                            }
                        },
                        fontSize = 14.5.sp,
                        letterSpacing = (-1.1).sp,
                    )
                }
                Spacer(Modifier.width(9.dp))
                Column(Modifier.weight(1f, fill = false)) {
                    Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(6.dp)) {
                        Text(
                            text = "MosaicEarth",
                            color = MosaicColors.TextPrimary,
                            fontWeight = FontWeight.Bold,
                            fontSize = 16.sp,
                            maxLines = 1,
                            softWrap = false,
                        )
                        if (onBack == null) {
                            Box(
                                modifier = Modifier
                                    .clip(RoundedCornerShape(4.dp))
                                    .background(MosaicColors.LimeContainer)
                                    .border(1.dp, MosaicColors.BorderLime, RoundedCornerShape(4.dp))
                                    .padding(horizontal = 5.dp, vertical = 1.dp)
                            ) {
                                Text(
                                    text = "CAPTURE",
                                    color = MosaicColors.Lime,
                                    fontSize = 9.5.sp,
                                    fontWeight = FontWeight.ExtraBold,
                                    letterSpacing = 0.7.sp,
                                    maxLines = 1,
                                    softWrap = false,
                                )
                            }
                        }
                    }
                    if (!subtitle.isNullOrBlank()) {
                        Text(
                            text = subtitle,
                            color = MosaicColors.TextSecondary,
                            fontSize = 11.5.sp,
                            maxLines = 1,
                            overflow = TextOverflow.Ellipsis,
                        )
                    }
                }
            }

            if (onAccountClick != null) {
                Spacer(Modifier.width(8.dp))
                Row(
                    modifier = Modifier
                        .widthIn(max = 136.dp)
                        .clip(CircleShape)
                        .background(Color(0xFF17211B))
                        .border(
                            1.dp,
                            if (isSignedIn) MosaicColors.BorderLime else MosaicColors.BorderSubtle,
                            CircleShape
                        )
                        .clickable(onClick = onAccountClick)
                        .padding(horizontal = 10.dp, vertical = 6.dp),
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(6.dp),
                ) {
                    Box(
                        modifier = Modifier
                            .size(7.dp)
                            .clip(CircleShape)
                            .background(if (isSignedIn) MosaicColors.Lime else MosaicColors.TextMuted)
                    )
                    Text(
                        text = accountLabel?.takeIf { it.isNotBlank() } ?: "MyEarth",
                        color = if (isSignedIn) MosaicColors.TextPrimary else MosaicColors.TextSecondary,
                        fontSize = 11.5.sp,
                        fontWeight = FontWeight.Medium,
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis,
                    )
                    if (!isSignedIn) {
                        Icon(
                            imageVector = Icons.Default.Person,
                            contentDescription = null,
                            tint = MosaicColors.Lime,
                            modifier = Modifier.size(13.dp),
                        )
                    }
                }
            }
        }
        HorizontalDivider(thickness = 1.dp, color = Color(0x3899CC00))
    }
}

/**
 * Bordered MosaicEarth geospatial card with optional click action and accent highlight.
 */
@Composable
fun MosaicCard(
    modifier: Modifier = Modifier,
    highlighted: Boolean = false,
    onClick: (() -> Unit)? = null,
    padding: Dp = 14.dp,
    content: @Composable ColumnScope.() -> Unit,
) {
    val shape = RoundedCornerShape(12.dp)
    val border = BorderStroke(
        1.dp,
        if (highlighted) MosaicColors.BorderLime else MosaicColors.BorderSubtle
    )
    val bg = if (highlighted) MosaicColors.CardElevated else MosaicColors.CardBg
    if (onClick != null) {
        Surface(
            onClick = onClick,
            modifier = modifier,
            shape = shape,
            color = bg,
            border = border,
        ) {
            Column(Modifier.padding(padding), content = content)
        }
    } else {
        Surface(
            modifier = modifier,
            shape = shape,
            color = bg,
            border = border,
        ) {
            Column(Modifier.padding(padding), content = content)
        }
    }
}

/**
 * MosaicEarth workspace-style pill switcher (matches MyEarth / MyMosaics bar on Web).
 */
@Composable
fun MosaicSegmentedBar(
    options: List<Pair<String, ImageVector?>>,
    selectedIndex: Int,
    onSelect: (Int) -> Unit,
    modifier: Modifier = Modifier,
) {
    val compactVertical = options.size >= 4
    Row(
        modifier = modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(10.dp))
            .background(Color(0xFF0E1711))
            .border(1.dp, MosaicColors.BorderSubtle, RoundedCornerShape(10.dp))
            .padding(4.dp),
        horizontalArrangement = Arrangement.spacedBy(4.dp),
    ) {
        options.forEachIndexed { idx, (label, icon) ->
            val active = idx == selectedIndex
            if (compactVertical) {
                Column(
                    modifier = Modifier
                        .weight(1f)
                        .clip(RoundedCornerShape(7.dp))
                        .background(if (active) MosaicColors.Lime else Color.Transparent)
                        .clickable { onSelect(idx) }
                        .padding(horizontal = 4.dp, vertical = 6.dp),
                    horizontalAlignment = Alignment.CenterHorizontally,
                    verticalArrangement = Arrangement.spacedBy(2.dp),
                ) {
                    if (icon != null) {
                        Icon(
                            imageVector = icon,
                            contentDescription = null,
                            tint = if (active) MosaicColors.OnLime else MosaicColors.Lime,
                            modifier = Modifier.size(16.dp),
                        )
                    }
                    Text(
                        text = label,
                        color = if (active) MosaicColors.OnLime else MosaicColors.TextPrimary,
                        fontSize = 10.5.sp,
                        fontWeight = if (active) FontWeight.ExtraBold else FontWeight.Medium,
                        maxLines = 1,
                        softWrap = false,
                        overflow = TextOverflow.Ellipsis,
                    )
                }
            } else {
                Row(
                    modifier = Modifier
                        .weight(1f)
                        .clip(RoundedCornerShape(7.dp))
                        .background(if (active) MosaicColors.Lime else Color.Transparent)
                        .clickable { onSelect(idx) }
                        .padding(horizontal = 6.dp, vertical = 8.dp),
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.Center,
                ) {
                    if (icon != null) {
                        Icon(
                            imageVector = icon,
                            contentDescription = null,
                            tint = if (active) MosaicColors.OnLime else MosaicColors.Lime,
                            modifier = Modifier.size(15.dp),
                        )
                        Spacer(Modifier.width(5.dp))
                    }
                    Text(
                        text = label,
                        color = if (active) MosaicColors.OnLime else MosaicColors.TextPrimary,
                        fontSize = 12.sp,
                        fontWeight = if (active) FontWeight.Bold else FontWeight.Medium,
                        maxLines = 1,
                        softWrap = false,
                        overflow = TextOverflow.Ellipsis,
                    )
                }
            }
        }
    }
}

@Composable
fun MosaicBadge(
    text: String,
    color: Color = MosaicColors.Lime,
    containerColor: Color = MosaicColors.LimeContainer,
    icon: ImageVector? = null,
) {
    Row(
        modifier = Modifier
            .clip(RoundedCornerShape(6.dp))
            .background(containerColor)
            .border(1.dp, color.copy(alpha = 0.38f), RoundedCornerShape(6.dp))
            .padding(horizontal = 7.dp, vertical = 3.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(4.dp),
    ) {
        if (icon != null) {
            Icon(icon, contentDescription = null, tint = color, modifier = Modifier.size(12.dp))
        }
        Text(
            text = text,
            color = color,
            style = MaterialTheme.typography.labelSmall,
            maxLines = 1,
        )
    }
}

@Composable
fun MosaicSectionTitle(title: String, trailing: String? = null) {
    Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Text(
            text = title.uppercase(),
            color = MosaicColors.TextSecondary,
            style = MaterialTheme.typography.labelSmall,
            letterSpacing = 0.9.sp,
        )
        if (!trailing.isNullOrBlank()) {
            Text(
                text = trailing,
                color = MosaicColors.Lime,
                style = MaterialTheme.typography.labelMedium,
            )
        }
    }
}

@Composable
fun MosaicMetricPill(
    label: String,
    value: String,
    accent: Color = MosaicColors.Lime,
    modifier: Modifier = Modifier,
) {
    Column(
        modifier = modifier
            .clip(RoundedCornerShape(10.dp))
            .background(MosaicColors.InputBg)
            .border(1.dp, MosaicColors.BorderSubtle, RoundedCornerShape(10.dp))
            .padding(horizontal = 10.dp, vertical = 8.dp),
    ) {
        Text(
            text = value,
            color = accent,
            fontWeight = FontWeight.Bold,
            fontSize = 15.sp,
            maxLines = 1,
        )
        Text(
            text = label,
            color = MosaicColors.TextSecondary,
            fontSize = 11.sp,
            maxLines = 1,
            overflow = TextOverflow.Ellipsis,
        )
    }
}

@Composable
fun MosaicHeroBanner(
    title: String,
    subtitle: String,
    actionLabel: String,
    actionIcon: ImageVector,
    onAction: () -> Unit,
) {
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(14.dp))
            .background(
                Brush.linearGradient(
                    colors = listOf(Color(0xFF1A2D1E), Color(0xFF111C15))
                )
            )
            .border(1.dp, MosaicColors.BorderLime, RoundedCornerShape(14.dp))
            .padding(16.dp)
    ) {
        Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.Top,
            ) {
                Column(Modifier.weight(1f), verticalArrangement = Arrangement.spacedBy(4.dp)) {
                    Text(
                        text = title,
                        style = MaterialTheme.typography.titleLarge,
                        color = MosaicColors.TextPrimary,
                    )
                    Text(
                        text = subtitle,
                        style = MaterialTheme.typography.bodySmall,
                        color = MosaicColors.TextSecondary,
                    )
                }
            }
            Button(
                onClick = onAction,
                colors = ButtonDefaults.buttonColors(
                    containerColor = MosaicColors.Lime,
                    contentColor = MosaicColors.OnLime,
                ),
                shape = RoundedCornerShape(8.dp),
                contentPadding = PaddingValues(horizontal = 16.dp, vertical = 10.dp),
            ) {
                Icon(actionIcon, contentDescription = null, modifier = Modifier.size(18.dp))
                Spacer(Modifier.width(7.dp))
                Text(actionLabel, fontWeight = FontWeight.Bold)
            }
        }
    }
}
