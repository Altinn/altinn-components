var f=Object.defineProperty;var t=(i,e)=>f(i,"name",{value:e,configurable:!0});import{a7 as o}from"./iframe-BhbNl8M-.js";import{u as j}from"./useProfileLayout-WdmEu_Et.js";import{u as g,B as k}from"./useBookmarks-CZjp2Wyr.js";import{L as x}from"./Layout-Bi2sLomB.js";import{P as b}from"./PageBase-PeSNWFKS.js";import{H as n}from"./Heading-Cykhux0L.js";import{T as I}from"./Toolbar-Cd-nnA0c.js";import{B as h}from"./BookmarkModal-CEZXNPoK.js";import{u as C}from"./useInboxLayout-DpZUD0pL.js";import{u as y}from"./useAccountMenu-CB1eDk4k.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-DKoAVF2-.js";import"./Bell-Cnsmdj93.js";import"./Bookmark-fWw4PRdh.js";import"./ClockDashed-CjBrcx7s.js";import"./globalMenu-DLp0UzhL.js";import"./PersonCircle-CSh1iTk6.js";import"./Buildings2-4YKnHmoY.js";import"./InboxFill-C-Gznw1O.js";import"./MenuGrid-DTjxVVPA.js";import"./MagnifyingGlass-CzKquxqQ.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-CfOkFSG4.js";import"./Trash-Df4Pkq18.js";import"./useLayout-CRL-o6CO.js";import"./useLocale-4qyXxddG.js";import"./header-oVTgoXh6.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-6KerkDf-.js";import"./BookmarkSettingsItem-BsSXnYXs.js";import"./QueryLabel-y5wveDgK.js";import"./Plus-BcmDIJkz.js";import"./SettingsItemBase-CAbwX_aT.js";import"./ItemMedia-1lh8-vEh.js";import"./Avatar-BNyDKZi7.js";import"./AvatarGroup-B4pMcHMh.js";import"./ChevronUp-Dq4__2Sc.js";import"./ChevronDown-FDOS9kby.js";import"./ChevronRight-DG59p-Nv.js";import"./ItemBase-H82chU0B.js";import"./ItemLink-BMM2GMUL.js";import"./ItemControls-Enh4UL9O.js";import"./Badge-np8uN8Yi.js";import"./Tooltip-8dIP2lk7.js";import"./Typography-DcyIPmTi.js";import"./useHighlightedText-LhTntwcL.js";import"./ContextMenu-Ij8B0w81.js";import"./useDropdownMenuController-BrJ75r99.js";import"./Dropdown--p27U_G_.js";import"./SearchField-ClYBiZmS.js";import"./FieldBase--SCvu2WQ.js";import"./Field-Qg24LC8p.js";import"./Label-BJPwmzpN.js";import"./Input-jGspNcB3.js";import"./MenuListItem-CmOECRgU.js";import"./MenuListDivider-DzxdVQ89.js";import"./MenuListHeading-DAQ9yky2.js";import"./MenuItem-C2AE0J9V.js";import"./Checkmark-CzAA5vNN.js";import"./ItemLabel-BJSi7rzf.js";import"./InformationSquare-9qL3pT6L.js";import"./MenuElipsisHorizontal-BHZ3A16x.js";import"./Pencil-BF3VQhmx.js";import"./SkipLink-q81YSldO.js";import"./CookieBanner-CKCrzmx7.js";import"./Banner-BMb1L36s.js";import"./GlobalHeader-CSzpOvf-.js";import"./useIsDesktop-CoNfvEt7.js";import"./GlobalAccountButton-DJLFYXlr.js";import"./Enter-DgJZC0JW.js";import"./GlobalMenuButton-CQFUYfha.js";import"./MenuHamburger-DEHtIGqF.js";import"./AccountSelector-Bq_sOzpk.js";import"./Switch-HPZGYIQM.js";import"./AccountMenu-C1XnEBmu.js";import"./GlobalMenu-Sj7JrfLA.js";import"./ArrowUndo-D9tJ-Erq.js";import"./Globe-DCB48zAy.js";import"./BreadcrumbsLink-lneiUb_j.js";import"./ArrowRight-40scby1E.js";import"./Footer-DQFb1BdE.js";import"./Flex-ywhhAUvJ.js";import"./ButtonGroup-Tx5tOZpy.js";import"./ButtonGroupDivider-DzYj1AlG.js";import"./ChevronUpDown-DD9NYfqC.js";import"./ToolbarMenu-CGZc-SL-.js";import"./ToolbarSearch-Dh0sqSUB.js";import"./SettingsModal-C5lElqHH.js";import"./ModalBody-MK76vZzv.js";import"./Section-w9Om4z74.js";import"./ButtonIcon-7FhxMerM.js";import"./ButtonLabel-Cq2XOZ5S.js";import"./TextField-hoToHKJf.js";import"./inboxMenu-wxxAzzfg.js";const Ie={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},d=t(()=>{const i=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:a}=y({includeGroups:!0}),{expandedId:s,onClose:p,groups:l,items:m,search:L}=g({grouped:!1}),B=s&&m.find(S=>S.id===s);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:a?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(k,{items:m,groups:l}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),s&&o.jsx(h,{...B,title:"Rediger lagret søk",open:s!=="",onClose:p,buttons:[{label:"Lagre",onClick:t(()=>p(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>p(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const i=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:a,search:s,groups:p}=g({grouped:!0}),l=e&&a.find(m=>m.id===e);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:s}),o.jsx(k,{items:a,groups:p}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const i=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:a,search:s,groups:p}=g({grouped:!0}),l=e&&a.find(m=>m.id===e);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Bokmerker"}),o.jsx(I,{search:s}),o.jsx(k,{items:a,groups:p}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings");d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
