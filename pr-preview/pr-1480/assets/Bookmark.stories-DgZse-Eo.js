var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a7 as o}from"./iframe-r-PzxnFG.js";import{u as j}from"./useProfileLayout-BgpC_Esd.js";import{u as g,B as x}from"./useBookmarks-CFCpnabl.js";import{L as k}from"./Layout-DiBl5Ss_.js";import{P as b}from"./PageBase-DxNDcwho.js";import{H as m}from"./Heading-qFKPv3xm.js";import{T as h}from"./Toolbar-Be6Tch-c.js";import{B as I}from"./BookmarkModal-DFUXZ16l.js";import{u as C}from"./useInboxLayout-9-IBgR7c.js";import{u as y}from"./useAccountMenu-BkEejnLn.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-ClnFDlAG.js";import"./Bell-q-HOnHBl.js";import"./Bookmark-D8tcOQIL.js";import"./ClockDashed-wZFtld5l.js";import"./globalMenu-DZrKoONM.js";import"./PersonCircle-DirIdGej.js";import"./Buildings2-BvvammpD.js";import"./InboxFill-DXiS2hpk.js";import"./MenuGrid-CZNJcB7P.js";import"./MagnifyingGlass-7vnMkGiQ.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-CAWbyIsL.js";import"./Trash-0c2zCAv3.js";import"./useLayout-b8sxLxt5.js";import"./useLocale-ONEEo_UB.js";import"./header-mzwr1EEx.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BMl9Yb_c.js";import"./BookmarkSettingsItem-BCYFdpsO.js";import"./QueryLabel-DNW7hyld.js";import"./Plus-C3gc2Iai.js";import"./SettingsItemBase-YCR0c7jg.js";import"./ItemMedia-BFk5syHA.js";import"./Avatar-Dzc1_6Ua.js";import"./AvatarGroup-D0dlHClc.js";import"./ChevronUp-B0s8dawY.js";import"./ChevronDown-BD5i-hxE.js";import"./ChevronRight-DoF3revo.js";import"./ItemBase-CTpIDqLP.js";import"./ItemLink-BAk2uFkE.js";import"./ItemControls-Di1aFGjk.js";import"./Badge-CQlPkK8J.js";import"./Tooltip-B_Gc3g4S.js";import"./Typography-DZA02yZr.js";import"./useHighlightedText-D1CHWYs6.js";import"./ContextMenu-Cek1quhS.js";import"./useDropdownMenuController-D2Eauaak.js";import"./useIsDesktop-Di7DAkKs.js";import"./Dropdown-tD-rtn-3.js";import"./SearchField-Cn8qUcxo.js";import"./commonTexts-CG1mkCQM.js";import"./MenuListItem-IXmILE2K.js";import"./MenuListDivider-DjMXmyAN.js";import"./MenuItem-Cmtt-77v.js";import"./CheckboxUncheckedIcon-CL3G4Xwm.js";import"./RadioUncheckedIcon-D0JrFl2l.js";import"./ItemLabel-DE7oETkr.js";import"./FieldBase-D95hzyfr.js";import"./Field-C8va_Ig3.js";import"./Label-dzQU0Yg2.js";import"./Input-BYbvd3yE.js";import"./InformationSquare-x0k9ph8l.js";import"./Pencil-B-n9dhwv.js";import"./SkipLink-CxAmd6fp.js";import"./CookieBanner-FV1KTXzV.js";import"./Link-Cir18kU1.js";import"./Banner-BLHl1LXV.js";import"./GlobalHeader-B2yCgO-g.js";import"./GlobalAccountButton-DLB0nold.js";import"./Enter-C5EQ7SBG.js";import"./GlobalMenuButton-CtToZxYI.js";import"./MenuHamburger-BBbrRald.js";import"./AccountSelector-7QzxMRVr.js";import"./Switch-BcyiU8sz.js";import"./AccountMenu-4Pvbq0L4.js";import"./GlobalMenu-IlPBKVIs.js";import"./Checkmark-D0ulgpJN.js";import"./ArrowUndo-BHFoGQzk.js";import"./Globe-cKjoRVPR.js";import"./BreadcrumbsLink-C2WcbWT1.js";import"./ArrowRight-iKU0eq0k.js";import"./Footer-DHBjbd5P.js";import"./Flex-DRLqoZbu.js";import"./ButtonGroup-tpSmkUGs.js";import"./ButtonGroupDivider-B1E5WcaK.js";import"./ChevronUpDown-HPDH3mEH.js";import"./ToolbarMenu-BxyYmvJJ.js";import"./ToolbarSearch-JhKmYWK0.js";import"./SettingsModal-BdZ7Q-Ay.js";import"./ModalBody-B-L7EXsI.js";import"./Section-DH0F_yu4.js";import"./ButtonLabel-DKmNFHli.js";import"./TextField-CvCwRuU3.js";import"./inboxMenu-xZz36WC1.js";const Ie={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",as:"h1",children:"Lagrede søk"}),o.jsx(h,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(I,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",as:"h1",children:"Lagrede søk"}),o.jsx(h,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",as:"h1",children:"Lagrede søk"}),o.jsx(h,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
        <Heading size="xl" as="h1">
          Lagrede søk
        </Heading>
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
        <Heading size="xl" as="h1">
          Lagrede søk
        </Heading>
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
        <Heading size="xl" as="h1">
          Lagrede søk
        </Heading>
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
}`,...c.parameters?.docs?.source}}};export{c as BookmarkSettings,u as InboxAllAccounts,d as InboxSingleAccount,Ce as __namedExportsOrder,Ie as default};
