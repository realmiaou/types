import { Brand } from 'ts-brand'

export type WalletId = Brand<string, 'WalletId'>
export type Token = Brand<number, 'Token'>
export const cryptoCurrencies = [
  '611', 'ABC', 'ACP', 'ACT', 'ACT*', 'ADA', 'ADCN', 'ADL', 'ADX', 'ADZ', 'AE', 'AGI', 'AIB', 'AIDOC', 'AION', 'AIR', 'ALT', 'AMB', 'AMM', 'ANT', 'APC', 'APPC', 'ARC', 'ARCT', 'ARDR', 'ARK', 'ARN', 'ASAFE2', 'AST', 'ATB', 'ATM', 'AURS', 'AVT', 'BAR', 'BASH', 'BAT', 'BAY', 'BBP', 'BCD', 'BCH', 'BCN', 'BCPT', 'BEE', 'BIO', 'BLC', 'BLOCK', 'BLU', 'BLZ', 'BMC', 'BNB', 'BNT', 'BOST', 'BQ', 'BQX', 'BRD', 'BRIT', 'BT1', 'BT2', 'BTC', 'BTCA', 'BTCS', 'BTCZ', 'BTG', 'BTLC', 'BTM', 'BTM*', 'BTQ', 'BTS', 'BTX', 'BURST', 'BUSD', 'CALC', 'CAS', 'CAT', 'CCRB', 'CDT', 'CESC', 'CHAT', 'CJ', 'CL', 'CLD', 'CLOAK', 'CMT*', 'CND', 'CNX', 'CPC', 'CRAVE', 'CRC', 'CRE', 'CRW', 'CTO', 'CTR', 'CVC', 'DAS', 'DASH', 'DAT', 'DATA', 'DBC', 'DBET', 'DCN', 'DCR', 'DCT', 'DEEP', 'DENT', 'DGB', 'DGD', 'DIM', 'DIME', 'DMD', 'DNT', 'DOGE', 'DRGN', 'DRZ', 'DSH', 'DTA', 'EC', 'EDG', 'EDO', 'EDR', 'EKO', 'ELA', 'ELF', 'EMC', 'EMGO', 'ENG', 'ENJ', 'EOS', 'ERT', 'ETC', 'ETH', 'ETN', 'ETP', 'ETT', 'EUR', 'EVR', 'EVX', 'FCT', 'FLP', 'FOTA', 'FRST', 'FUEL', 'FUN', 'FUNC', 'FUTC', 'GAME', 'GAS', 'GBYTE', 'GMX', 'GNO', 'GNT', 'GNX', 'GRC', 'GRS', 'GRWI', 'GTC', 'GTO', 'GUP', 'GVT', 'GXS', 'HAC', 'HNC', 'HSR', 'HST', 'HVN', 'ICN', 'ICOS', 'ICX', 'IGNIS', 'ILC', 'INK', 'INS', 'INSN', 'INT', 'IOP', 'IOST', 'ITC', 'KCS', 'KICK', 'KIN', 'KLC', 'KMD', 'KNC', 'KRB', 'LA', 'LEND', 'LEO', 'LINDA', 'LINK', 'LOC', 'LOG', 'LRC', 'LSK', 'LTC', 'LUN', 'LUX', 'MAID', 'MANA', 'MCAP', 'MCO', 'MDA', 'MDS', 'MIOTA', 'MKR', 'MLN', 'MNX', 'MOD', 'MOIN', 'MONA', 'MTL', 'MTN*', 'MTX', 'NAS', 'NAV', 'NBT', 'NDC', 'NEBL', 'NEO', 'NEU', 'NEWB', 'NGC', 'NKC', 'NLC2', 'NMC', 'NMR', 'NULS', 'NVC', 'NXT', 'OAX', 'OBITS', 'OC', 'OCN', 'ODN', 'OK', 'OMG', 'OMNI', 'ORE', 'ORME', 'OST', 'OTN', 'OTX', 'OXY', 'PART', 'PAY', 'PBT', 'PCS', 'PIVX', 'PIZZA', 'PLBT', 'PLR', 'POE', 'POLY', 'POSW', 'POWR', 'PPC', 'PPT', 'PPY', 'PRC', 'PRES', 'PRG', 'PRL', 'PRO', 'PURA', 'PUT', 'QASH', 'QAU', 'QSP', 'QTUM', 'QUN', 'R', 'RBIES', 'RCN', 'RDD', 'RDN', 'RDN*', 'REBL', 'REE', 'REP', 'REQ', 'REV', 'RGC', 'RHOC', 'RIYA', 'RKC', 'RLC', 'RPX', 'RUFF', 'SALT', 'SAN', 'SBC', 'SC', 'SENT', 'SHIFT', 'SIB', 'SMART', 'SMLY', 'SMT*', 'SNC', 'SNGLS', 'SNM', 'SNT', 'SPK', 'SRN', 'STEEM', 'STK', 'STORJ', 'STRAT', 'STU', 'STX', 'SUB', 'SUR', 'SWFTC', 'SYS', 'TAAS', 'TESLA', 'THC', 'THETA', 'THS', 'TIO', 'TKN', 'TKY', 'TNB', 'TNT', 'TOA', 'TRC', 'TRIG', 'TRST', 'TRUMP', 'TRX', 'UBQ', 'UNO', 'UNRC', 'UQC', 'USD', 'USDC', 'USDT', 'UTK', 'UTT', 'VEE', 'VEN', 'VERI', 'VIA', 'VIB', 'VIBE', 'VOISE', 'VOX', 'VRS', 'VTC', 'VUC', 'WABI', 'WAVES', 'WAX', 'WC', 'WGR', 'WINGS', 'WLK', 'WOP', 'WPR', 'WRC', 'WTC', 'XAUR', 'XBP', 'XBY', 'XCP', 'XCXT', 'XDN', 'XEM', 'XGB', 'XHI', 'XID', 'XLM', 'XMR', 'XNC', 'XRB', 'XRP', 'XTO', 'XTZ', 'XUC', 'XVG', 'XZC', 'YEE', 'YOC', 'YOYOW', 'ZBC', 'ZCL', 'ZEC', 'ZEN', 'ZIL', 'ZNY', 'ZRX', 'ZSC'
] as const
export type CryptoCurrency = typeof cryptoCurrencies[number]
