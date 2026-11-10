var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a6 as o}from"./iframe-Yc5vADWD.js";import{u as j}from"./useProfileLayout-Bj-6eCGQ.js";import{u as g,B as x}from"./useBookmarks-HjmSt1uP.js";import{L as k}from"./Layout-D0oQT3Dr.js";import{P as b}from"./PageBase-Cn4t58-Y.js";import{H as m}from"./Heading-DEfYMi8I.js";import{T as I}from"./Toolbar-CPbzrGeB.js";import{B as h}from"./BookmarkModal-DNnOpIM9.js";import{u as C}from"./useInboxLayout-ChoCcnfe.js";import{u as y}from"./useAccountMenu-CefcaoFX.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-DHNRDEOI.js";import"./Bell-Be0rtm2u.js";import"./Bookmark-nCgC_NEs.js";import"./ClockDashed-CfxZLWwP.js";import"./globalMenu-gbiJxtTP.js";import"./PersonCircle-DmjSZPTB.js";import"./Buildings2-DfxUKA-x.js";import"./InboxFill-G4XjwwCh.js";import"./MenuGrid-CDep6gRY.js";import"./MagnifyingGlass-D24TEFQh.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-52BKtGhP.js";import"./Trash-DtaM_GNe.js";import"./useLayout-DX6kMpo8.js";import"./useLocale-BQDegRz8.js";import"./header-BXZtHWs1.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CxtnSdnP.js";import"./BookmarkSettingsItem-Cic5ONuG.js";import"./QueryLabel-BN2MNQ4B.js";import"./Plus-BG9CstYb.js";import"./SettingsItemBase-D8FPmu9V.js";import"./ItemMedia-93ge468N.js";import"./Avatar-B1293ug9.js";import"./AvatarGroup-b9E5cL-B.js";import"./ChevronUp-CHIwOCup.js";import"./ChevronDown-DOVICByK.js";import"./ChevronRight-BvgS2wwu.js";import"./ItemBase-Bnlsc0Vh.js";import"./ItemLink-AwrKKBO4.js";import"./ItemControls-CBx0Fvi9.js";import"./Badge-B7caOYrZ.js";import"./Tooltip-ClWq0FMC.js";import"./Typography-BbQNKF3N.js";import"./useHighlightedText-DPM1PtgE.js";import"./ContextMenu-TzZVtjIn.js";import"./useDropdownMenuController-CfW-t4Vt.js";import"./Dropdown-ClwEgS76.js";import"./SearchField-DuQI2WUG.js";import"./MenuListItem-D_xInwm_.js";import"./MenuListDivider-CBT6dc8U.js";import"./MenuItem-Do_eZo-E.js";import"./CheckboxUncheckedIcon-BTRLnzsL.js";import"./RadioUncheckedIcon-B5Tym566.js";import"./ItemLabel-CEwOeVMD.js";import"./FieldBase-Dm91Yu7W.js";import"./Field-CKipP2ZI.js";import"./Label-Coc0T7Cr.js";import"./Input-XB5O9fra.js";import"./InformationSquare-TRKWejmi.js";import"./Pencil-DQNWsbDh.js";import"./SkipLink-5s7iHcFe.js";import"./CookieBanner-Bv5jbEtk.js";import"./Link-NvhW_JA3.js";import"./Banner-BR7HfYZ0.js";import"./GlobalHeader-DtD7Bi_o.js";import"./useIsDesktop-BSuHAgib.js";import"./GlobalAccountButton-DOfFwmM4.js";import"./Enter-33WYXkGQ.js";import"./GlobalMenuButton-DAKf8ey0.js";import"./MenuHamburger-BZO_lHH1.js";import"./AccountSelector-BqS9VXnN.js";import"./Switch-D1NN4jqs.js";import"./AccountMenu-CgK3-AZU.js";import"./GlobalMenu-B-GfbJrP.js";import"./Checkmark-Bfjel_6l.js";import"./ArrowUndo-C9sxw3hI.js";import"./Globe-BdpCoWNM.js";import"./BreadcrumbsLink-B7mvbHEj.js";import"./ArrowRight-CfnTjRjZ.js";import"./Footer-BFZED0r-.js";import"./Flex-B3cYS6HF.js";import"./ButtonGroup-B5kerLtb.js";import"./ButtonGroupDivider-BsvtysKz.js";import"./ChevronUpDown-LFrhbZU_.js";import"./ToolbarMenu-D072efD4.js";import"./ToolbarSearch-CofC1Dg1.js";import"./SettingsModal-DUyGtATO.js";import"./ModalBody-DUEHfhkT.js";import"./Section-CEOcJou8.js";import"./ButtonIcon-CKHHrDRr.js";import"./ButtonLabel-D5BE_G-1.js";import"./TextField-B21FXhH9.js";import"./inboxMenu-Cz1Y3JjF.js";const he={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};export{c as BookmarkSettings,u as InboxAllAccounts,d as InboxSingleAccount,Ce as __namedExportsOrder,he as default};
