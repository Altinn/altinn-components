var f=Object.defineProperty;var t=(i,e)=>f(i,"name",{value:e,configurable:!0});import{a7 as o}from"./iframe-CHdTRX1S.js";import{u as j}from"./useProfileLayout-DLqtWto7.js";import{u as g,B as k}from"./useBookmarks-BouDIS0a.js";import{L as x}from"./Layout-BAdKeMc2.js";import{P as b}from"./PageBase-CiCFXxZ3.js";import{H as n}from"./Heading-CWEvYxPf.js";import{T as I}from"./Toolbar-DZNzE5PK.js";import{B as h}from"./BookmarkModal-BXEeRD4-.js";import{u as C}from"./useInboxLayout-D3n78a_j.js";import{u as y}from"./useAccountMenu-BqnsyJWo.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-C8CDMWke.js";import"./Bell-D8ZZcvWP.js";import"./Bookmark-CLGLjDoM.js";import"./ClockDashed-L3cqwChJ.js";import"./globalMenu-DPikLiik.js";import"./PersonCircle-D6EWv42v.js";import"./Buildings2-CyFQwsFF.js";import"./InboxFill-CSEqyTOi.js";import"./MenuGrid-B8l_elR-.js";import"./MagnifyingGlass-DoQnYB7U.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-DTcxNWPK.js";import"./Trash-j20aQRbZ.js";import"./useLayout-BlF0Rd2f.js";import"./useLocale-h146CYdR.js";import"./header-CZ4ZfOMj.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-erQCXILL.js";import"./BookmarkSettingsItem-DY1BMlr3.js";import"./QueryLabel-CMjZ_eIU.js";import"./Plus-XpG4Dc8n.js";import"./SettingsItemBase-DVmYVQzH.js";import"./ItemMedia-BQC5N1RJ.js";import"./Avatar-BgVv4jsI.js";import"./AvatarGroup-C6qZoOIR.js";import"./ChevronUp-Bc1dDmk3.js";import"./ChevronDown-BTY70Kvu.js";import"./ChevronRight-h2GXZqhR.js";import"./ItemBase-Dt1Xxwib.js";import"./ItemLink-C4ONfugD.js";import"./ItemControls-D53PO9xK.js";import"./Badge-ZdmE6gaR.js";import"./Tooltip-CYLMyUyD.js";import"./Typography-6g7ttECm.js";import"./useHighlightedText-HQpCSNf5.js";import"./ContextMenu-D-52UC8M.js";import"./useDropdownMenuController-D8aBOA94.js";import"./Dropdown-lGfq8dlC.js";import"./SearchField-CHvi1Rr9.js";import"./MenuListItem-BuMUeh0I.js";import"./MenuListHeading-BF6vRJ1G.js";import"./MenuItem-C43FNrfh.js";import"./Checkmark-BvCukKJy.js";import"./ItemLabel-BnULnKGe.js";import"./FieldBase-CkHB3870.js";import"./Field-8ZiKnfLQ.js";import"./Label-CJ7sG7Qi.js";import"./Input-CiIWWSBU.js";import"./MenuListDivider-tQrfQ--u.js";import"./InformationSquare-B7p_A_2X.js";import"./MenuElipsisHorizontal-BzRZw6re.js";import"./Pencil-fBmO9hF7.js";import"./SkipLink-BGR3gUHZ.js";import"./CookieBanner-EX49xoo3.js";import"./Link-CgqRBP1_.js";import"./Banner-bPhDqDex.js";import"./GlobalHeader-BvkS7HKk.js";import"./useIsDesktop-BkKeRcUN.js";import"./GlobalAccountButton-eIHSniiH.js";import"./Enter-CqcCQCxA.js";import"./GlobalMenuButton-B6AJMXt4.js";import"./MenuHamburger-DGqoRL5Z.js";import"./AccountSelector-DGdQw3BV.js";import"./Switch-DlUvEvai.js";import"./AccountMenu-C_aIb6mU.js";import"./GlobalMenu-eyIbcXM5.js";import"./ArrowUndo-BxOUoQQA.js";import"./Globe-KQBmjpCv.js";import"./BreadcrumbsLink-aESNMqqg.js";import"./ArrowRight-DVUtDFtL.js";import"./Footer-Dvv8b_dg.js";import"./Flex-BzRwEaeD.js";import"./ButtonGroup-DccEHAHc.js";import"./ButtonGroupDivider-CyYVvD6M.js";import"./ChevronUpDown-G-PmcF11.js";import"./ToolbarMenu-QYjqK9ep.js";import"./ToolbarSearch-tLMhFnJ2.js";import"./SettingsModal-ciEMEXzg.js";import"./ModalBody-BiQ99NwW.js";import"./Section-C-qQMjwL.js";import"./ButtonIcon-BDrjexQx.js";import"./ButtonLabel-DN7WHzkG.js";import"./TextField-DV1D8C-w.js";import"./inboxMenu-KfkU6khE.js";const he={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},d=t(()=>{const i=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:a}=y({includeGroups:!0}),{expandedId:s,onClose:p,groups:l,items:m,search:L}=g({grouped:!1}),B=s&&m.find(S=>S.id===s);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:a?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(k,{items:m,groups:l}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),s&&o.jsx(h,{...B,title:"Rediger lagret søk",open:s!=="",onClose:p,buttons:[{label:"Lagre",onClick:t(()=>p(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>p(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const i=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:a,search:s,groups:p}=g({grouped:!0}),l=e&&a.find(m=>m.id===e);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:s}),o.jsx(k,{items:a,groups:p}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const i=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:a,search:s,groups:p}=g({grouped:!0}),l=e&&a.find(m=>m.id===e);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Bokmerker"}),o.jsx(I,{search:s}),o.jsx(k,{items:a,groups:p}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings");d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};const Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{c as BookmarkSettings,u as InboxAllAccounts,d as InboxSingleAccount,Ce as __namedExportsOrder,he as default};
