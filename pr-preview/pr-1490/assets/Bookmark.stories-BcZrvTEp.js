var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a6 as o}from"./iframe-BW6sNfUG.js";import{u as j}from"./useProfileLayout-Dl6kzZI0.js";import{u as g,B as x}from"./useBookmarks-CUHHh3eo.js";import{L as k}from"./Layout-BRGO3Pxh.js";import{P as b}from"./PageBase-DU33z_FT.js";import{H as m}from"./Heading-DZSCY0dD.js";import{T as I}from"./Toolbar-D6qimzgG.js";import{B as h}from"./BookmarkModal-8TgXwt8U.js";import{u as C}from"./useInboxLayout-DN6-Z2KI.js";import{u as y}from"./useAccountMenu-C4dO-fGe.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-B-yKUcbi.js";import"./Bell-D7qjbS4k.js";import"./Bookmark-Dvpolsml.js";import"./ClockDashed-BfnIbYm5.js";import"./globalMenu-BhfXV69n.js";import"./PersonCircle-BTIkMKiQ.js";import"./Buildings2-1YBn2wwl.js";import"./InboxFill-DB0GMdkZ.js";import"./MenuGrid-Bp-MYz7m.js";import"./MagnifyingGlass-Drdd_pqG.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-B39KtXbP.js";import"./Trash-V_KyvxF_.js";import"./useLayout-CK2DWd9l.js";import"./useLocale-BH5uSXf7.js";import"./header-D92ziJoR.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-uJdjEIIP.js";import"./BookmarkSettingsItem-DXfoRzl_.js";import"./QueryLabel-RFsuRDbV.js";import"./Plus-CdPXJ-Lc.js";import"./SettingsItemBase-D0ADEhJm.js";import"./ItemMedia-C8rbfA3l.js";import"./Avatar-C64BSSKk.js";import"./AvatarGroup-Ccq8C8ES.js";import"./ChevronUp-D9Lqz4C3.js";import"./ChevronDown-CGVF_s9R.js";import"./ChevronRight-DCXIgdRg.js";import"./ItemBase-CfaNBgoH.js";import"./ItemLink-BFgdINRy.js";import"./ItemControls-Bqaen0yJ.js";import"./Badge-CSeOMfHV.js";import"./Tooltip-CNbHjlA7.js";import"./Typography-DluWU8As.js";import"./useHighlightedText-Dx6jhFuL.js";import"./ContextMenu-Ci0D4hVi.js";import"./useDropdownMenuController-BlHO4qrZ.js";import"./Dropdown-bOP-opo8.js";import"./SearchField--GRE4W__.js";import"./MenuListItem-BekZrZTE.js";import"./MenuListDivider-Bd4QDS3f.js";import"./MenuItem-C4PV3Kj2.js";import"./CheckboxUncheckedIcon-D8b9z956.js";import"./RadioUncheckedIcon-BmM-W-GL.js";import"./ItemLabel-Dcm3mA4k.js";import"./FieldBase-CiEo5wf3.js";import"./Field-BCzysLpY.js";import"./Label-xW9KovlB.js";import"./Input-gnkfXNcC.js";import"./InformationSquare-1mOGr1dD.js";import"./Pencil-BGM-ab9r.js";import"./SkipLink-Vo-PXquq.js";import"./CookieBanner-CiOG0Kpd.js";import"./Link-Bp8Nw_8-.js";import"./Banner-DHc3Yjej.js";import"./GlobalHeader-Dd8WtTln.js";import"./useIsDesktop-K1BK9pQC.js";import"./GlobalAccountButton-BjtDDNLZ.js";import"./Enter-Dt6b_6kn.js";import"./GlobalMenuButton-C4dWsTVa.js";import"./MenuHamburger-DnvsbnfP.js";import"./AccountSelector-Dd-cE7hX.js";import"./Switch-BQQXs8vx.js";import"./AccountMenu-eYdaPZUA.js";import"./GlobalMenu-DMhb8QD9.js";import"./Checkmark-Br7Bq_3w.js";import"./ArrowUndo-gaLA-SPG.js";import"./Globe-fpE-1Baj.js";import"./BreadcrumbsLink-XSdj1u1V.js";import"./ArrowRight-JAuvZFV7.js";import"./Footer-GDlyG5dh.js";import"./Flex-Ws1WKTNd.js";import"./ButtonGroup-CkPO8wDs.js";import"./ButtonGroupDivider-CS_mNJWU.js";import"./ChevronUpDown-BC_Hbppl.js";import"./ToolbarMenu-B2LBYM88.js";import"./ToolbarSearch-hDsJFPue.js";import"./SettingsModal-CPgr95ko.js";import"./ModalBody-iaAxc7Vl.js";import"./Section-C6OUO-lD.js";import"./ButtonIcon-ByUF5niU.js";import"./ButtonLabel-ByUlEqji.js";import"./TextField-B3MTsir2.js";import"./inboxMenu-BBx30qPg.js";const he={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
