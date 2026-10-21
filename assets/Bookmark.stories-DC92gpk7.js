var f=Object.defineProperty;var t=(i,e)=>f(i,"name",{value:e,configurable:!0});import{a7 as o}from"./iframe-CW69B4-4.js";import{u as j}from"./useProfileLayout-CrBMYPjp.js";import{u as g,B as k}from"./useBookmarks-C0ETsyEt.js";import{L as x}from"./Layout-B_7nyMPO.js";import{P as b}from"./PageBase-2sQoewrK.js";import{H as n}from"./Heading-BlWFVsgQ.js";import{T as I}from"./Toolbar-DYpQGXKR.js";import{B as h}from"./BookmarkModal-CUTZn77V.js";import{u as C}from"./useInboxLayout--9Az0B0g.js";import{u as y}from"./useAccountMenu-Tymaw9nB.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-DkooJKuR.js";import"./Bell-CmmHNQBr.js";import"./Bookmark-LA0lxQXC.js";import"./ClockDashed-B9DP6HjC.js";import"./globalMenu-GOiap1A2.js";import"./PersonCircle-ByGIkqCx.js";import"./Buildings2-O1uq_JUr.js";import"./InboxFill-D5LTolsy.js";import"./MenuGrid-CpQPQ3av.js";import"./MagnifyingGlass-JTPy69Hm.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-DYq_SIX9.js";import"./Trash-D4e6x_o2.js";import"./useLayout-BLiDNBgr.js";import"./useLocale-CkCpj6ku.js";import"./header-BEUfmFDv.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-bx75--uT.js";import"./BookmarkSettingsItem-DjcvIG5w.js";import"./QueryLabel-CeEvFdab.js";import"./Plus-BD6Fr9o4.js";import"./SettingsItemBase-BSHBMMog.js";import"./ItemMedia-zpQSTqxO.js";import"./Avatar-DlTYOJ9X.js";import"./AvatarGroup-C54_5QsB.js";import"./ChevronUp-BFUaosek.js";import"./ChevronDown-CiTeIiQR.js";import"./ChevronRight-CxFkThxw.js";import"./ItemBase-BB5MbWTj.js";import"./ItemLink-CAV-Z684.js";import"./ItemControls-Dz-gOQFJ.js";import"./Badge-pUt1HWk8.js";import"./Tooltip-Bdo2x66E.js";import"./Typography-CD2WmtRN.js";import"./useHighlightedText-Coh-oebD.js";import"./ContextMenu-DeqMuVtu.js";import"./useDropdownMenuController-BBtpGQm9.js";import"./Dropdown-DTxBcaKX.js";import"./SearchField-LDFEPhQv.js";import"./MenuListItem-CMSm7sFe.js";import"./MenuListHeading-Cky4DZUO.js";import"./MenuItem-WxsEDNt-.js";import"./Checkmark-BGDDfT19.js";import"./ItemLabel-BOWUd3uk.js";import"./FieldBase-Cx7I1cae.js";import"./Field-rkOFbQMU.js";import"./Label-DMxT2wjQ.js";import"./Input-BNHnVUMY.js";import"./MenuListDivider-C9vQ7MZ-.js";import"./InformationSquare-O6zrlrVZ.js";import"./MenuElipsisHorizontal-CWvkIr-a.js";import"./Pencil-Br9aCNCN.js";import"./SkipLink-z1B9lV1q.js";import"./CookieBanner-CjygE0LW.js";import"./Banner-sDPlm4fb.js";import"./GlobalHeader-CRHYSdkx.js";import"./useIsDesktop-DSB5VsnW.js";import"./GlobalAccountButton-CVWw2o_g.js";import"./Enter-BCK4qu55.js";import"./GlobalMenuButton-DOkB80LY.js";import"./MenuHamburger-CkzROnpS.js";import"./AccountSelector-BQ9ON5Hs.js";import"./Switch-D3R4G4XP.js";import"./AccountMenu-BU0exfrj.js";import"./GlobalMenu-G17RUCAu.js";import"./ArrowUndo-DP6Ao8AK.js";import"./Globe-CieDabaJ.js";import"./BreadcrumbsLink-BYR2umK4.js";import"./ArrowRight-DzvF-M15.js";import"./Footer-DSiwazAh.js";import"./Flex-CcbgemcX.js";import"./ButtonGroup-Bd6oXbKy.js";import"./ButtonGroupDivider-Bet5BvnL.js";import"./ChevronUpDown-RCCUwdzA.js";import"./ToolbarMenu-CuVUfLY8.js";import"./ToolbarSearch-L8k6ix7B.js";import"./SettingsModal-Csmc-w-c.js";import"./ModalBody-DjVjmbs2.js";import"./Section-DQYipFAJ.js";import"./ButtonIcon-DDkKoEB2.js";import"./ButtonLabel-DwtT3aqm.js";import"./TextField-CM3gnTYW.js";import"./inboxMenu-CD6QTmo4.js";const Ie={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},d=t(()=>{const i=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:a}=y({includeGroups:!0}),{expandedId:s,onClose:p,groups:l,items:m,search:L}=g({grouped:!1}),B=s&&m.find(S=>S.id===s);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:a?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(k,{items:m,groups:l}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),s&&o.jsx(h,{...B,title:"Rediger lagret søk",open:s!=="",onClose:p,buttons:[{label:"Lagre",onClick:t(()=>p(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>p(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const i=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:a,search:s,groups:p}=g({grouped:!0}),l=e&&a.find(m=>m.id===e);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:s}),o.jsx(k,{items:a,groups:p}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const i=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:a,search:s,groups:p}=g({grouped:!0}),l=e&&a.find(m=>m.id===e);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Bokmerker"}),o.jsx(I,{search:s}),o.jsx(k,{items:a,groups:p}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings");d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const layout = useInboxLayout({
    pageId: 'bookmarks'
  });
  const {
    items: accountItems,
    groups: accountGroups,
    currentAccount
  } = useAccountMenu({
    includeGroups: true
  });
  const {
    expandedId,
    onClose,
    groups,
    items,
    search
  } = useBookmarks({
    grouped: false
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Lagrede søk</Heading>
        <Toolbar accountMenu={{
        label: currentAccount?.title,
        items: accountItems,
        groups: accountGroups,
        searchable: true
      }} search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const layout = useInboxLayout({
    pageId: 'bookmarks'
  });
  const {
    expandedId,
    onClose,
    items,
    search,
    groups
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Lagrede søk</Heading>
        <Toolbar search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const layout = useProfileLayout({
    pageId: 'bookmarks'
  });
  const {
    expandedId,
    onClose,
    items,
    search,
    groups
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Bokmerker</Heading>
        <Toolbar search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...c.parameters?.docs?.source}}};const he=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{c as BookmarkSettings,u as InboxAllAccounts,d as InboxSingleAccount,he as __namedExportsOrder,Ie as default};
