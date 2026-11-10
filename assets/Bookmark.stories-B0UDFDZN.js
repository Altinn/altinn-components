var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a6 as o}from"./iframe-CfESZwGq.js";import{u as j}from"./useProfileLayout-CVINHnYU.js";import{u as g,B as x}from"./useBookmarks-KS1E3vVw.js";import{L as k}from"./Layout-DUuE-Ou8.js";import{P as b}from"./PageBase-BFYd2uVP.js";import{H as m}from"./Heading-BMVjBYv7.js";import{T as I}from"./Toolbar-ClShfmlT.js";import{B as h}from"./BookmarkModal-Dj0srzye.js";import{u as C}from"./useInboxLayout-BSaXSM__.js";import{u as y}from"./useAccountMenu-CtVcBggF.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-Bj_kLhYI.js";import"./Bell-BiXYdmvK.js";import"./Bookmark-B_ThKo_j.js";import"./ClockDashed-CTNpkhjM.js";import"./globalMenu-tXjhSQdN.js";import"./PersonCircle-BTGNYzp8.js";import"./Buildings2-ClRD1E4M.js";import"./InboxFill-CxH-FZoP.js";import"./MenuGrid-CGy7PnqW.js";import"./MagnifyingGlass-CdYCPvzC.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-g44wWaqP.js";import"./Trash-B8iqDuUh.js";import"./useLayout-BbVkyVzJ.js";import"./useLocale-C3Mk-E9B.js";import"./header-Od3SKb1D.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DCL6y2xK.js";import"./BookmarkSettingsItem-I2pLCL8T.js";import"./QueryLabel-DaQAnvTh.js";import"./Plus-C15azGMz.js";import"./SettingsItemBase-CZ4omkJk.js";import"./ItemMedia-av47GhhR.js";import"./Avatar-DD7mVb1C.js";import"./AvatarGroup-BU05kps4.js";import"./ChevronUp-AGjLHyT-.js";import"./ChevronDown-BeusJatl.js";import"./ChevronRight-B74pzmXz.js";import"./ItemBase-nh7R-0mK.js";import"./ItemLink-HBd6VQB6.js";import"./ItemControls-m0GxRmTW.js";import"./Badge-pBqwugki.js";import"./Tooltip-DUaFgqyq.js";import"./Typography-DtLS48Hu.js";import"./useHighlightedText-DZWCzlXV.js";import"./ContextMenu-Bnd9vrc8.js";import"./useDropdownMenuController-COgknKdL.js";import"./Dropdown-BfcDJKeS.js";import"./SearchField-Dzjcb6Jc.js";import"./MenuListItem-DFvxTJo7.js";import"./MenuListDivider-PhbjEgIJ.js";import"./MenuItem-DfUUgYTt.js";import"./CheckboxUncheckedIcon-8mxNE8Kh.js";import"./RadioUncheckedIcon-BTuDB-oi.js";import"./ItemLabel-Bf911ckJ.js";import"./FieldBase-B5R0NBwO.js";import"./Field-B6D7FR_A.js";import"./Label-C598VR2I.js";import"./Input-C1qnV1Va.js";import"./InformationSquare-BWZxY-Ir.js";import"./Pencil-C5ZSsCbu.js";import"./SkipLink-BfYwNiOX.js";import"./CookieBanner-BkOFQ3j0.js";import"./Link-DsvxrKVD.js";import"./Banner-CkxdVSu6.js";import"./GlobalHeader-KtK9X2tS.js";import"./useIsDesktop-DuR8D8_r.js";import"./GlobalAccountButton-D64CL6rx.js";import"./Enter-B6lOGCKU.js";import"./GlobalMenuButton-G92qHvB4.js";import"./MenuHamburger-Dm7Id1b9.js";import"./AccountSelector-CViGMN2t.js";import"./Switch-BH_KBOBo.js";import"./AccountMenu-BhZcjiKm.js";import"./GlobalMenu-CDjKAhOl.js";import"./Checkmark-B9ugWUTA.js";import"./ArrowUndo-Ds3qFIs3.js";import"./Globe-DQPwD49L.js";import"./BreadcrumbsLink-BfnwJCv0.js";import"./ArrowRight-C5VAtTTo.js";import"./Footer-Csa8fVfX.js";import"./Flex-DCvAlmz5.js";import"./ButtonGroup-B_R5r7Ky.js";import"./ButtonGroupDivider-Li1M8dtA.js";import"./ChevronUpDown-D6O2HcLJ.js";import"./ToolbarMenu-Cd0RVmSQ.js";import"./ToolbarSearch-KAv3ICTy.js";import"./SettingsModal-BsVJPuAI.js";import"./ModalBody-BLp5zyl4.js";import"./Section-CXHovEsj.js";import"./ButtonIcon-CMvu13gC.js";import"./ButtonLabel-BX3qt1RO.js";import"./TextField-CKOvOvtn.js";import"./inboxMenu-Ddd3ZPv9.js";const he={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
